# dsh-skin-mari

[English](README.en.md) | 简体中文

面向 DSH Web UI 的真希波·玛丽 / EVA 八号机主题皮肤。设计语言采用烟紫黑、玫红、荧光黄绿、暖象牙白与眼镜双镜片光学准星。

![真希波 · UNIT-08 实际运行截图](preview/dark.webp)

## 特性

- 欢迎页显示完整真希波立绘和 UNIT-08 光学准星。
- 进入对话后立绘自动向右退让并降低透明度与饱和度，避免影响阅读。
- 独立设计亮色、暗色、设置弹窗、菜单、终端、消息和禁用状态。
- 适配宽屏、窄屏和系统“减少动态效果”设置。
- 切换皮肤时完整回收 DOM、观察器、标题、favicon、主题色和内联布局变量。
- 角色素材内嵌于客户端包，不依赖远程图片服务。

## 安装

```sh
dsh plugin --profile web add https://github.com/unpain/dsh-skin-mari.git
```

安装后，在 `设置 > 皮肤` 中选择 `真希波 · UNIT-08`。

## 开发与验证

```sh
pnpm install --config.auto-install-peers=false
node scripts/sync-art.mjs
node scripts/sync-client-bundle.mjs
node node_modules/vitest/vitest.mjs run
```

## 许可与声明

代码使用 MIT License。真希波·玛丽与《新世纪福音战士》相关角色及设定归其各自权利方所有。本仓库是非官方同人主题，与相关权利方无关联。详见 [NOTICE](NOTICE)。
