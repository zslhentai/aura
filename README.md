# AURA

原创高端智能桌面灯概念官网。围绕“让光，懂你的节奏”设计，以放大的产品形态、金属细节与日夜光感构建浏览体验。

## 运行

没有构建步骤，没有运行时依赖。直接打开 `index.html`，或者在本目录执行：

```sh
python -m http.server 4173
```

访问 `http://localhost:4173`。HTML、CSS、JavaScript、字体、图片全部自托管。部署到任何静态服务器即可，所有本地资源使用相对路径，兼容 GitHub Pages 项目子路径。

## 体验

- 专注、阅读、放松三种灯光场景，亮度可连续调节。
- 原色银、石墨黑外观选择，对应独立产品视觉。
- 原生 dialog 弹窗、Escape 关闭、焦点返回及键盘可用的 FAQ。
- 响应式重排、移动导航、滚动视差与分层进入动效。
- `prefers-reduced-motion` 降级；不执行 JavaScript 时主体内容仍可阅读。

## 文件

```text
index.html       语义化页面与完整文案
style.css        字体、主题、响应式与动效
app.js           场景、调光、配色、弹窗与进入动效
assets/          六张 WebP 产品图、字体与 favicon
DESIGN.md        设计决策与素材说明
QA.md            实际验证结果与限制
```

## GitHub Pages

将本目录作为新仓库根目录推送到 `main`。在仓库 Settings → Pages 选择 **Deploy from a branch**，分支 **main**，目录 **/(root)**。`.nojekyll` 已包含，无需 Jekyll、npm 或编译流程。

## 素材与设定

所有产品图均使用内置 ImageGen 为本项目原创生成并优化为 WebP。完整产品形态以最初银色视觉为参考；没有使用 Apple 的素材、标识、文案或源码。

拉丁字体为 Indian Type Foundry 的 [Switzer](https://www.fontshare.com/fonts/switzer)，由 [Fontshare](https://www.fontshare.com/) 分发；字体文件按其原有授权使用，参阅 [ITF Free Font License](https://www.fontshare.com/licenses/itf-ffl)。中文使用设备原生字体。第三方字体不因本项目而更改授权。

AURA 为虚构品牌与产品，价格、尺寸、色温、功率、配件及功能全部是概念设定。网页光效为视觉模拟，不是实际灯具光学测量。没有付款、订单、账号或个人信息收集后端。
