# Portfolio

Next.js SSR
原子设计理论+styled components
Typescript

## 功能

- 侧边导航栏
- 博客过滤菜单 搜索栏

## 项目架构

> `data`之后应用 CMS 后端处理 前端不应该有 Hard Coded
> 如果类文件夹的子文件也需要分级 (例如 theme 按边角, 字体分类)则应该用 index 格式.

反之如果文件夹的子文件种类单一 例如 layout, hooks 则只需要到处该文件 并避免太多无意义的 index 因为也没有再分类

atoms, molecules, layout 为基础的 building block 应该尽可能的保证样式化可通用 避免 margin padding 影响位置的样式化

- `components` (next.js 自动配置路由 忽略 pages 就可以)
  - `atoms` -> 最基础最核心的 building block prop 不应该有复杂结构
  - `molecules`
  - `organisms`
  - `templates` -> template 即建立页面的组件 因此可以按页面路由分类更符合逻辑 除非 template 为 shared
- `contexts` 全局变量
- `hooks` 所有可重复利用的逻辑 状态(命名 useFunctionality)
- `pages` 页面
- `public` HTML meta
- `static` 管理静态文件, fonts, images, lottie...
- `types` 类型管理
- `styles` -> `theme`整体样式, 其他一些 override
- `utils` 一些函数 等

## 路由

- index 主页面 landing 长滚动页面
- portfolio
  - /project/[id] -> 项目详情 动机, solutions
  - /video/[id] -> 视频详情 (Youtube, 预览图, 评论)
  - /packages/[id] -> npm how to use
- blogs 全部博客 (CMS? 后台管理?)
  - blogs/[id] 指定博客
