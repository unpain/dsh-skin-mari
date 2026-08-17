export const SKIN_CSS = String.raw`
body[data-dsh-mari-interface] {
  color: #261722;
  background-color: #f3ece7;
  background-image:
    linear-gradient(rgba(255, 250, 245, 0.82), rgba(238, 226, 226, 0.91)),
    repeating-linear-gradient(90deg, rgba(116, 32, 79, 0.052) 0 1px, transparent 1px 68px),
    repeating-linear-gradient(0deg, rgba(116, 32, 79, 0.044) 0 1px, transparent 1px 68px),
    radial-gradient(circle at 79% 42%, rgba(240, 75, 145, 0.22), transparent 37%);
  background-attachment: fixed;
  --mari-pink: #f04b91;
  --mari-pink-hot: #ff6daa;
  --mari-plum: #271020;
  --mari-plum-2: #43152f;
  --mari-green: #c8f13f;
  --mari-green-dark: #718f08;
  --mari-ivory: #fff8ee;
  --mari-panel: rgba(255, 248, 241, 0.82);
  --mari-line: rgba(154, 45, 97, 0.25);
  --mari-sidebar-width: 280px;
  --mari-titlebar-height: 0px;
  --mari-shadow: 0 22px 58px rgba(87, 27, 58, 0.16), 0 3px 10px rgba(51, 18, 38, 0.1);

  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(255, 251, 246, 0.92);
  --dsw-alias-bg-layer-2: rgba(246, 235, 233, 0.95);
  --dsw-alias-bg-layer-3: rgba(235, 218, 220, 0.96);
  --dsw-alias-bg-overlay: rgba(255, 251, 247, 0.98);
  --dsw-alias-border-l1: rgba(112, 31, 70, 0.14);
  --dsw-alias-border-l2-darkmode-thin: rgba(112, 31, 70, 0.22);
  --dsw-alias-border-l2: rgba(112, 31, 70, 0.27);
  --dsw-alias-border-l3: rgba(240, 75, 145, 0.6);
  --dsw-alias-brand-primary: #d93679;
  --dsw-alias-brand-text: #8a1f55;
  --dsw-alias-button-elevated-fill: rgba(255, 251, 247, 0.95);
  --dsw-alias-button-floating-fill: rgba(255, 252, 248, 0.98);
  --dsw-alias-button-floating-hover: #f9dce9;
  --dsw-alias-button-info-fill: #dc397c;
  --dsw-alias-button-info-hover: #bd2867;
  --dsw-alias-interactive-bg-active: rgba(240, 75, 145, 0.17);
  --dsw-alias-interactive-bg-hover: rgba(240, 75, 145, 0.085);
  --dsw-alias-interactive-bg-hover-solid: #f7dee8;
  --dsw-alias-label-primary: #261722;
  --dsw-alias-label-primary-bluish: #42152f;
  --dsw-alias-label-secondary: #6f5062;
  --dsw-alias-label-tertiary: #927586;
  --dsw-alias-label-caption: #aa909d;
  --dsw-alias-state-business-primary: #d93679;
  --dsw-alias-state-business-tertiary: #f7d9e6;
  --dsw-shadow-lv2: var(--mari-shadow);
  --dsw-specific-input-major: rgba(255, 250, 245, 0.9);
  --dsw-specific-selector: rgba(245, 231, 232, 0.95);
  --dsw-specific-sidebar-fill: rgba(31, 11, 27, 0.98);
}

body[data-dsh-mari-interface][data-ds-dark-theme] {
  color: #fff2f8;
  background-color: #170a15;
  background-image:
    linear-gradient(rgba(19, 7, 17, 0.82), rgba(31, 10, 26, 0.95)),
    repeating-linear-gradient(90deg, rgba(255, 92, 163, 0.07) 0 1px, transparent 1px 68px),
    repeating-linear-gradient(0deg, rgba(255, 92, 163, 0.052) 0 1px, transparent 1px 68px),
    radial-gradient(circle at 79% 42%, rgba(225, 46, 125, 0.27), transparent 40%);
  --mari-panel: rgba(43, 14, 36, 0.82);
  --mari-line: rgba(255, 107, 170, 0.3);
  --mari-shadow: 0 24px 68px rgba(0, 0, 0, 0.46), 0 3px 12px rgba(0, 0, 0, 0.32);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(45, 15, 38, 0.94);
  --dsw-alias-bg-layer-2: rgba(62, 20, 49, 0.95);
  --dsw-alias-bg-layer-3: rgba(82, 29, 62, 0.96);
  --dsw-alias-bg-overlay: rgba(31, 10, 26, 0.99);
  --dsw-alias-border-l1: rgba(255, 137, 186, 0.15);
  --dsw-alias-border-l2-darkmode-thin: rgba(255, 137, 186, 0.24);
  --dsw-alias-border-l2: rgba(255, 137, 186, 0.31);
  --dsw-alias-border-l3: rgba(255, 91, 161, 0.68);
  --dsw-alias-brand-primary: #ff70ad;
  --dsw-alias-brand-text: #ffd1e5;
  --dsw-alias-button-elevated-fill: rgba(70, 23, 55, 0.96);
  --dsw-alias-button-floating-fill: rgba(77, 25, 61, 0.98);
  --dsw-alias-button-floating-hover: #6d2851;
  --dsw-alias-button-info-fill: #e83f85;
  --dsw-alias-button-info-hover: #ff5f9f;
  --dsw-alias-interactive-bg-active: rgba(255, 92, 163, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(255, 92, 163, 0.12);
  --dsw-alias-interactive-bg-hover-solid: #5b2146;
  --dsw-alias-label-primary: #fff4f9;
  --dsw-alias-label-primary-bluish: #ffe2ef;
  --dsw-alias-label-secondary: #e1b9cb;
  --dsw-alias-label-tertiary: #b990a4;
  --dsw-alias-label-caption: #966f83;
  --dsw-alias-state-business-primary: #ff70ad;
  --dsw-alias-state-business-tertiary: #602044;
  --dsw-specific-input-major: rgba(39, 13, 33, 0.94);
  --dsw-specific-selector: rgba(78, 27, 60, 0.96);
  --dsw-specific-sidebar-fill: rgba(20, 7, 18, 0.99);
}

body[data-dsh-mari-interface] [id='root'] {
  position: relative;
  z-index: 2;
  background: transparent;
}

body[data-dsh-mari-interface] [data-skin-chrome='mari-artwork-stage'] {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  contain: strict;
  pointer-events: none;
}

body[data-dsh-mari-interface] [data-skin-artwork] {
  position: absolute;
  right: clamp(18px, 2vw, 36px);
  bottom: clamp(12px, 1.6vh, 20px);
  width: auto;
  height: min(88vh, 920px);
  max-width: calc(100vw - var(--mari-sidebar-width) - 24px);
  object-fit: contain;
  opacity: 0.95;
  filter: drop-shadow(-20px 22px 34px rgba(48, 8, 34, 0.31));
  transform-origin: right bottom;
  transition: opacity 420ms ease, transform 560ms cubic-bezier(0.22, 0.75, 0.2, 1), filter 420ms ease;
}

body[data-dsh-mari-interface][data-ds-dark-theme] [data-skin-artwork] {
  filter: drop-shadow(-22px 24px 38px rgba(0, 0, 0, 0.46)) saturate(1.02);
}

body[data-dsh-mari-interface] [data-skin-orbit] {
  position: absolute;
  top: 43%;
  right: clamp(60px, 12vw, 240px);
  width: min(50vw, 720px);
  aspect-ratio: 1;
  border: 1px solid rgba(240, 75, 145, 0.34);
  border-radius: 50%;
  opacity: 0.72;
  background:
    conic-gradient(from 12deg, transparent 0 8deg, rgba(240, 75, 145, 0.82) 8deg 9deg, transparent 9deg 32deg, rgba(200, 241, 63, 0.8) 32deg 33deg, transparent 33deg 64deg),
    radial-gradient(circle, transparent 0 47%, rgba(240, 75, 145, 0.15) 47.2% 47.7%, transparent 48% 61%, rgba(200, 241, 63, 0.12) 61.2% 61.7%, transparent 62%);
  transform: translate(50%, -50%) rotate(-11deg);
  animation: mari-optic-rotate 34s linear infinite;
}

body[data-dsh-mari-interface] [data-mari-optics] {
  position: absolute;
  top: 42%;
  right: clamp(-10px, 5vw, 90px);
  width: min(39vw, 570px);
  height: min(17vw, 245px);
  opacity: 0.34;
  background:
    radial-gradient(ellipse at 27% 50%, transparent 0 33%, rgba(240, 75, 145, 0.42) 33.5% 34%, transparent 34.5%),
    radial-gradient(ellipse at 73% 50%, transparent 0 33%, rgba(240, 75, 145, 0.42) 33.5% 34%, transparent 34.5%),
    linear-gradient(90deg, transparent 47%, rgba(240, 75, 145, 0.45) 47% 53%, transparent 53%);
  transform: translateY(-50%) rotate(-4deg);
}

body[data-dsh-mari-interface] [data-mari-optics]::before,
body[data-dsh-mari-interface] [data-mari-optics]::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid var(--mari-green);
  border-radius: 50%;
  background: rgba(200, 241, 63, 0.24);
  box-shadow: 0 0 12px rgba(200, 241, 63, 0.48);
}

body[data-dsh-mari-interface] [data-mari-optics]::before { left: 27%; }
body[data-dsh-mari-interface] [data-mari-optics]::after { right: 27%; }

body[data-dsh-mari-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
  opacity: 0.15;
  filter: saturate(0.6) drop-shadow(-10px 12px 22px rgba(39, 8, 28, 0.22));
  transform: translateX(20%) scale(0.93);
}

body[data-dsh-mari-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) :is([data-skin-orbit], [data-mari-optics]) {
  opacity: 0.13;
}

body[data-dsh-mari-interface] [data-skin-chrome='mari-accent-rail'] {
  position: fixed;
  top: var(--mari-titlebar-height, 0px);
  right: 0;
  left: var(--mari-sidebar-width, 280px);
  z-index: 4;
  height: 5px;
  pointer-events: none;
  background: linear-gradient(90deg, var(--mari-green) 0 34px, var(--mari-pink) 34px 44%, rgba(240, 75, 145, 0.08) 74%, transparent);
  box-shadow: 0 2px 15px rgba(240, 75, 145, 0.3);
  transition: left 180ms ease;
}

body[data-dsh-mari-interface] [data-skin-chrome='mari-titlebar-brand'] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding-inline: 10px;
  color: #fff0f7;
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  pointer-events: none;
}

body[data-dsh-mari-interface] [data-skin-chrome='mari-titlebar-brand']::before {
  content: '08';
  display: grid;
  place-items: center;
  width: 27px;
  height: 18px;
  border: 1px solid var(--mari-green);
  color: #281020;
  background: var(--mari-green);
  font-weight: 900;
}

body[data-dsh-mari-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #fff4f9;
  --dsw-alias-label-secondary: #dfb9ca;
  --dsw-alias-label-tertiary: #b58ca0;
  --dsw-alias-label-caption: #916b7f;
  --dsw-alias-border-l1: rgba(255, 133, 185, 0.13);
  --dsw-alias-border-l2: rgba(255, 133, 185, 0.24);
  --dsw-alias-interactive-bg-hover: rgba(240, 75, 145, 0.1);
  --dsw-alias-interactive-bg-active: rgba(240, 75, 145, 0.21);
  position: relative;
  z-index: 6;
  color: #fff4f9;
  border-right: 1px solid rgba(240, 75, 145, 0.45);
  background: #200b1b;
  box-shadow: 12px 0 38px rgba(22, 4, 18, 0.27), inset -2px 0 rgba(240, 75, 145, 0.13);
}

body[data-dsh-mari-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(105deg, transparent 0 86%, rgba(240, 75, 145, 0.055) 86% 87%, transparent 87%),
    radial-gradient(circle at 50% 12%, rgba(219, 57, 126, 0.18), transparent 33%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.015) 0 1px, transparent 1px 5px),
    linear-gradient(180deg, #351027, #1b0917 72%);
}

body[data-dsh-mari-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  content: '08';
  position: absolute;
  right: -14px;
  bottom: 82px;
  color: rgba(255, 100, 166, 0.055);
  font: 900 128px/1 Arial, sans-serif;
  letter-spacing: -0.09em;
  pointer-events: none;
}

body[data-dsh-mari-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * {
  position: relative;
  z-index: 1;
}

body[data-dsh-mari-interface] button[class*='brand'] > svg {
  color: #ffe0ee;
  filter: drop-shadow(0 0 8px rgba(240, 75, 145, 0.24));
}

body[data-dsh-mari-interface] button[class*='newSession'] {
  min-height: 40px;
  border: 1px solid rgba(255, 130, 183, 0.68);
  border-radius: 14px 5px 14px 5px;
  color: #fff9fb;
  background: linear-gradient(180deg, #f15497, #bd2768);
  box-shadow: 0 8px 20px rgba(134, 22, 78, 0.27), inset 0 1px rgba(255, 255, 255, 0.26);
  font-weight: 760;
}

body[data-dsh-mari-interface] button[class*='newSession']:hover {
  background: linear-gradient(180deg, #ff6daa, #d83378);
  box-shadow: 0 0 0 2px rgba(240, 75, 145, 0.15), 0 8px 24px rgba(134, 22, 78, 0.34);
}

body[data-dsh-mari-interface] [role='treeitem'][aria-selected='true'] {
  border-left: 2px solid var(--mari-pink-hot);
  background: linear-gradient(90deg, rgba(240, 75, 145, 0.22), rgba(240, 75, 145, 0.025));
  box-shadow: inset 10px 0 20px rgba(240, 75, 145, 0.06);
}

body[data-dsh-mari-interface] [role='treeitem'][aria-selected='true']::after {
  content: '';
  position: absolute;
  right: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--mari-green);
  box-shadow: 0 0 9px rgba(200, 241, 63, 0.72);
}

body[data-dsh-mari-interface] :is([data-pane='conversation'], [class*='centerCol']) {
  position: relative;
  z-index: 3;
  background: transparent;
}

body[data-dsh-mari-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #fff3f8;
  border-bottom: 1px solid rgba(240, 75, 145, 0.3);
  background: linear-gradient(90deg, rgba(31, 8, 26, 0.95), rgba(74, 18, 52, 0.85) 62%, rgba(31, 8, 26, 0.82));
  box-shadow: 0 8px 26px rgba(30, 4, 23, 0.15);
  backdrop-filter: blur(16px) saturate(1.06);
}

body[data-dsh-mari-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] :is(nav, span, button, a, div) {
  color: inherit;
}

body[data-dsh-mari-interface] button[class*='tabActive'] {
  color: #fff5fa;
  border-bottom-color: var(--mari-pink-hot);
  text-shadow: 0 0 14px rgba(240, 75, 145, 0.38);
}

body[data-dsh-mari-interface] [data-phase='hero'] {
  --dsh-chat-content-width: clamp(550px, 43vw, 735px);
  --dsh-composer-card-max-width: calc(var(--dsh-chat-content-width) + 32px);
}

body[data-dsh-mari-interface] [data-phase='hero'] [class*='headline'] {
  color: #4b1835;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-weight: 780;
  letter-spacing: -0.045em;
  text-shadow: 0 1px rgba(255, 255, 255, 0.72), 0 10px 30px rgba(109, 27, 69, 0.13);
}

body[data-dsh-mari-interface][data-ds-dark-theme] [data-phase='hero'] [class*='headline'] {
  color: #fff2f8;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.72), 0 0 24px rgba(240, 75, 145, 0.18);
}

body[data-dsh-mari-interface] [data-composer-card] {
  isolation: isolate;
  overflow: visible;
  border: 1px solid rgba(218, 54, 122, 0.56);
  border-radius: 22px 6px 22px 6px;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.44), transparent 30%), var(--dsw-specific-input-major);
  box-shadow: var(--mari-shadow), inset 0 1px rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(19px) saturate(1.04);
}

body[data-dsh-mari-interface] [data-composer-card]::before {
  content: '08 / TARGET INPUT';
  position: absolute;
  top: -8px;
  left: 20px;
  padding: 4px 10px;
  border: 1px solid var(--mari-green);
  color: #261020;
  background: var(--mari-green);
  font: 900 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 12px rgba(97, 121, 10, 0.18);
}

body[data-dsh-mari-interface] [data-composer-card]::after {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  background:
    linear-gradient(90deg, var(--mari-green) 0 30px, transparent 30px calc(100% - 50px), var(--mari-pink) calc(100% - 50px)) top / 100% 2px no-repeat,
    linear-gradient(90deg, var(--mari-pink) 0 50px, transparent 50px calc(100% - 30px), var(--mari-green) calc(100% - 30px)) bottom / 100% 2px no-repeat;
}

body[data-dsh-mari-interface] [data-phase='hero'] [data-composer-card] {
  min-height: 144px;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.57), transparent 34%), rgba(255, 247, 241, 0.76);
}

body[data-dsh-mari-interface][data-ds-dark-theme] [data-phase='hero'] [data-composer-card] {
  background: linear-gradient(118deg, rgba(240, 75, 145, 0.08), transparent 34%), rgba(37, 11, 31, 0.8);
}

body[data-dsh-mari-interface] [data-input-mirror] {
  min-height: 0;
  transition: min-height 460ms cubic-bezier(0.22, 0.78, 0.2, 1);
}

body[data-dsh-mari-interface] [data-phase='hero'] [data-input-mirror] { min-height: 72px; }

body[data-dsh-mari-interface] [data-composer-card] button[class*='primary'] {
  color: #fff;
  background: linear-gradient(180deg, #f35a9c, #c82b6d);
  box-shadow: 0 5px 15px rgba(160, 25, 86, 0.28), inset 0 1px rgba(255, 255, 255, 0.25);
}

body[data-dsh-mari-interface] [data-composer-card] button:hover:not(:disabled) {
  border-color: rgba(240, 75, 145, 0.72);
  color: #b72765;
}

body[data-dsh-mari-interface] [data-composer-card] button[class*='primary']:hover:not(:disabled) {
  color: #fff;
  background: linear-gradient(180deg, #ff70ad, #dc397c);
}

body[data-dsh-mari-interface] :is(button, [role='button']):disabled {
  opacity: 0.45;
  filter: saturate(0.45);
  box-shadow: none;
}

body[data-dsh-mari-interface] :is([class*='ConversationRoot'], [data-conversation-scroll]) { background: transparent; }

body[data-dsh-mari-interface] [class*='userRow'] [class*='bubble'] {
  border: 1px solid rgba(213, 53, 118, 0.35);
  border-radius: 14px 14px 3px 14px;
  background: rgba(248, 226, 235, 0.93);
  box-shadow: 0 8px 24px rgba(98, 25, 63, 0.09);
}

body[data-dsh-mari-interface][data-ds-dark-theme] [class*='userRow'] [class*='bubble'] {
  color: #fff2f8;
  background: rgba(87, 28, 65, 0.91);
}

body[data-dsh-mari-interface] :is([class*='thinking'], [class*='reasoning']) { border-left-color: var(--mari-green); }

body[data-dsh-mari-interface] [data-terminal] {
  --dsw-alias-markdown-code-block: rgba(25, 7, 21, 0.98);
  --dsw-alias-label-primary: #fff2f8;
  --dsw-alias-label-secondary: #e1b9cb;
  --dsw-alias-label-tertiary: #b58ca0;
  color: #fff2f8;
  border: 1px solid rgba(240, 75, 145, 0.29);
  background: #1a0716;
  box-shadow: inset 3px 0 var(--mari-green);
}

body[data-dsh-mari-interface] :is([role='dialog'], [role='menu'], [role='listbox']) {
  border-color: rgba(218, 54, 122, 0.36);
  box-shadow: var(--mari-shadow);
  backdrop-filter: blur(16px) saturate(0.96);
}

body[data-dsh-mari-interface] :is([role='menuitem'], [role='option']):is(:hover, [aria-selected='true']) {
  background: rgba(240, 75, 145, 0.13);
}

body[data-dsh-mari-interface]
  [data-slot='sidebar.settings']
  [role='presentation']
  > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #f4ece8;
  --dsw-alias-bg-layer-1: rgba(255, 251, 246, 0.99);
  --dsw-alias-bg-layer-2: rgba(246, 235, 233, 0.98);
  --dsw-alias-bg-layer-3: rgba(235, 218, 220, 0.98);
  --dsw-alias-bg-overlay: rgba(255, 251, 247, 0.99);
  --dsw-alias-label-primary: #261722;
  --dsw-alias-label-primary-bluish: #42152f;
  --dsw-alias-label-secondary: #6f5062;
  --dsw-alias-label-tertiary: #927586;
  --dsw-alias-label-caption: #aa909d;
  --dsw-alias-brand-text: #8a1f55;
  --dsw-alias-button-elevated-fill: #fffaf6;
  --dsw-alias-button-floating-fill: #fffcf9;
  --dsw-alias-interactive-bg-active: rgba(240, 75, 145, 0.15);
  --dsw-alias-interactive-bg-hover: rgba(240, 75, 145, 0.08);
  --dsw-specific-selector: rgba(245, 231, 232, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(248, 239, 236, 0.97);
}

body[data-dsh-mari-interface][data-ds-dark-theme]
  [data-slot='sidebar.settings']
  [role='presentation']
  > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #1c0918;
  --dsw-alias-bg-layer-1: rgba(45, 15, 38, 0.99);
  --dsw-alias-bg-layer-2: rgba(62, 20, 49, 0.99);
  --dsw-alias-bg-layer-3: rgba(82, 29, 62, 0.99);
  --dsw-alias-bg-overlay: rgba(31, 10, 26, 0.99);
  --dsw-alias-label-primary: #fff4f9;
  --dsw-alias-label-primary-bluish: #ffe2ef;
  --dsw-alias-label-secondary: #e1b9cb;
  --dsw-alias-label-tertiary: #b990a4;
  --dsw-alias-label-caption: #966f83;
  --dsw-alias-brand-text: #ffd1e5;
  --dsw-alias-button-elevated-fill: rgba(70, 23, 55, 0.97);
  --dsw-alias-button-floating-fill: rgba(77, 25, 61, 0.98);
  --dsw-specific-selector: rgba(78, 27, 60, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(28, 9, 24, 0.97);
}

body[data-dsh-mari-interface] :is(button, [role='button'], [role='tab'], [role='treeitem'], input, textarea, select):focus-visible {
  outline: 2px solid var(--mari-green);
  outline-offset: 2px;
}

body[data-dsh-mari-interface] ::selection {
  color: #fff;
  background: rgba(218, 54, 122, 0.86);
}

body[data-dsh-mari-interface] ::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#aa255f, #aa255f) padding-box;
}

@keyframes mari-optic-rotate {
  to { transform: translate(50%, -50%) rotate(349deg); }
}

@media (max-width: 1180px) {
  body[data-dsh-mari-interface] [data-skin-artwork] {
    right: clamp(12px, 2vw, 24px);
    bottom: 12px;
    height: 82vh;
    opacity: 0.58;
  }
  body[data-dsh-mari-interface] [data-skin-orbit] { right: 36px; width: 580px; }
  body[data-dsh-mari-interface] [data-mari-optics] { right: -72px; width: 510px; }
  body[data-dsh-mari-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] { opacity: 0.1; }
}

@media (max-width: 880px) {
  body[data-dsh-mari-interface] [data-skin-artwork] {
    opacity: 0.09;
    transform: translateX(24%);
  }
  body[data-dsh-mari-interface] :is([data-skin-orbit], [data-mari-optics]) { opacity: 0.1; }
  body[data-dsh-mari-interface] [data-phase='hero'] { --dsh-chat-content-width: min(90vw, 680px); }
  body[data-dsh-mari-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] { opacity: 0.08; }
}

@media (max-width: 620px) {
  body[data-dsh-mari-interface] [data-skin-artwork] {
    right: 8px;
    height: 68vh;
    opacity: 0.055;
  }
  body[data-dsh-mari-interface] [data-skin-chrome='mari-accent-rail'] { left: 0; }
  body[data-dsh-mari-interface] [data-composer-card] { border-radius: 17px 5px 17px 5px; }
  body[data-dsh-mari-interface] [data-composer-card]::before { left: 13px; }
  body[data-dsh-mari-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] { opacity: 0.05; }
}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-mari-interface] [data-skin-artwork],
  body[data-dsh-mari-interface] [data-skin-orbit],
  body[data-dsh-mari-interface] [data-skin-chrome='mari-accent-rail'],
  body[data-dsh-mari-interface] [data-input-mirror] {
    transition: none;
    animation: none;
  }
}
`
