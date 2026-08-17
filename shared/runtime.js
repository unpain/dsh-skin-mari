import { SKIN_ART, SKIN_FAVICON } from './art.js'
import { SKIN_CSS } from './theme-css.js'

const SKIN_ID = 'dsh-skin-mari'
const SKIN_NAME = '真希波 · UNIT-08'
const SKIN_DESCRIPTION = '玫红光学试验台、荧光校准标记与 UNIT-08 动态驾驶界面。'
const SKIN_AUTHOR = 'yujimaka'
const SKIN_TITLE = 'MARI // UNIT-08 // DSH'
const OWNER = 'mari-interface'
const BODY_ATTRIBUTE = 'data-dsh-mari-interface'
const ACCENT = '#F04B91'
const SIDEBAR_SELECTOR = ":is([data-pane='sidebar'], [class*='sidebarCol'])"
const LAYOUT_PROPERTIES = ['--mari-sidebar-width', '--mari-titlebar-height']

function createOwned(tag, chrome) {
  const node = document.createElement(tag)
  node.dataset.skinOwner = OWNER
  node.dataset.skinChrome = chrome
  return node
}

function createArtworkStage() {
  const stage = createOwned('div', 'mari-artwork-stage')
  const orbit = document.createElement('span')
  const optics = document.createElement('span')
  const artwork = document.createElement('img')
  stage.setAttribute('aria-hidden', 'true')
  orbit.dataset.skinOrbit = ''
  optics.dataset.mariOptics = ''
  artwork.dataset.skinArtwork = ''
  artwork.alt = ''
  artwork.src = SKIN_ART
  stage.append(orbit, optics, artwork)
  return stage
}

function createStylesheet() {
  const style = createOwned('style', 'mari-styles')
  style.textContent = SKIN_CSS
  return style
}

function createAccentRail() {
  const rail = createOwned('div', 'mari-accent-rail')
  rail.setAttribute('aria-hidden', 'true')
  return rail
}

function createFavicon() {
  const favicon = createOwned('link', 'mari-favicon')
  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = SKIN_FAVICON
  return favicon
}

function installFavicon() {
  const head = document.head
  const originals = Array.from(head.querySelectorAll('link[rel]'))
    .filter(node => node.relList.contains('icon'))
    .map(node => ({ node, nextSibling: node.nextSibling }))

  for (const { node } of originals) node.remove()
  const favicon = createFavicon()
  head.append(favicon)

  return {
    favicon,
    restore() {
      favicon.remove()
      for (let index = originals.length - 1; index >= 0; index -= 1) {
        const { node, nextSibling } = originals[index]
        if (node.isConnected) continue
        const anchor = nextSibling?.parentNode === head ? nextSibling : null
        head.insertBefore(node, anchor)
      }
    },
  }
}

function decorateTitlebar(ownedNodes) {
  const titlebar = document.querySelector("[class*='titlebar']")
  if (!titlebar || titlebar.querySelector("[data-skin-chrome='mari-titlebar-brand']")) return
  const brand = createOwned('span', 'mari-titlebar-brand')
  brand.textContent = '08 // 真希波・マリ // OPTICS ONLINE'
  brand.setAttribute('aria-hidden', 'true')
  ownedNodes.add(brand)
  titlebar.prepend(brand)
}

function measureLayout(body) {
  const sidebar = document.querySelector(SIDEBAR_SELECTOR)
  const rect = sidebar?.getBoundingClientRect()
  body.style.setProperty('--mari-sidebar-width', `${Math.max(0, rect?.width ?? 0)}px`)
  body.style.setProperty('--mari-titlebar-height', `${Math.max(0, rect?.top ?? 0)}px`)
  return sidebar
}

function observeSidebar(observer, current, body) {
  const next = measureLayout(body)
  if (next === current) return current
  if (current) observer.unobserve(current)
  if (next) observer.observe(next)
  return next
}

function createResizeObserver(body) {
  if (typeof ResizeObserver !== 'undefined') {
    return new ResizeObserver(() => measureLayout(body))
  }
  return { observe() {}, unobserve() {}, disconnect() {} }
}

function captureLayoutProperties(body) {
  const style = body.style
  return LAYOUT_PROPERTIES.map(name => ({
    name,
    present: Array.from({ length: style.length }, (_, index) => style.item(index)).includes(name),
    value: style.getPropertyValue(name),
    priority: style.getPropertyPriority(name),
  }))
}

function restoreLayoutProperties(body, properties) {
  for (const property of properties) {
    if (property.present) body.style.setProperty(property.name, property.value, property.priority)
    else body.style.removeProperty(property.name)
  }
}

function setSystemChrome() {
  const meta = document.head.querySelector('meta[name="theme-color"]')
  if (!meta) return { meta: null, value: undefined }
  const value = meta.content
  meta.content = ACCENT
  return { meta, value }
}

export function activateSkin(ctx) {
  const body = document.body
  const originalTitle = document.title
  const layoutProperties = captureLayoutProperties(body)
  const ownedNodes = new Set()
  const systemChrome = setSystemChrome()
  let faviconState
  let observedSidebar
  let syncFrame

  const resizeObserver = createResizeObserver(body)
  const sync = () => {
    syncFrame = undefined
    decorateTitlebar(ownedNodes)
    observedSidebar = observeSidebar(resizeObserver, observedSidebar, body)
  }
  const scheduleSync = () => {
    if (syncFrame === undefined) syncFrame = requestAnimationFrame(sync)
  }
  const mutationObserver = new MutationObserver(scheduleSync)
  const onWindowResize = () => measureLayout(body)

  ctx.effect(() => () => {
    mutationObserver.disconnect()
    resizeObserver.disconnect()
    window.removeEventListener('resize', onWindowResize)
    if (syncFrame !== undefined) cancelAnimationFrame(syncFrame)
    faviconState?.restore()
    ownedNodes.forEach(node => node.remove())
    body.removeAttribute(BODY_ATTRIBUTE)
    restoreLayoutProperties(body, layoutProperties)
    if (document.title === SKIN_TITLE) document.title = originalTitle
    if (systemChrome.meta?.isConnected) systemChrome.meta.content = systemChrome.value ?? ''
  }, 'ui-skin-mari-interface: reversible interface chrome')

  body.setAttribute(BODY_ATTRIBUTE, '')
  faviconState = installFavicon()
  ownedNodes.add(faviconState.favicon)
  for (const node of [createStylesheet(), createArtworkStage(), createAccentRail()]) {
    ownedNodes.add(node)
    if (node instanceof HTMLStyleElement) document.head.append(node)
    else body.prepend(node)
  }
  document.title = SKIN_TITLE
  mutationObserver.observe(body, { childList: true, subtree: true })
  window.addEventListener('resize', onWindowResize)
  sync()
}

async function mountManagedSkin(ctx) {
  const fiber = ctx.plugin({ apply: activateSkin })
  await fiber.await()
  return () => fiber.dispose()
}

export function apply(ctx) {
  ctx.effect(() => ctx.skinManager.register({
    id: SKIN_ID,
    name: SKIN_NAME,
    description: SKIN_DESCRIPTION,
    author: SKIN_AUTHOR,
    preview: SKIN_ART,
    order: 4,
    activate: () => mountManagedSkin(ctx),
  }), 'ui-skin-mari-interface: skin registration')
}

export const inject = ['skinManager']
