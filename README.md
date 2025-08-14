# React + TypeScript 示例应用

一个现代化的 React + TypeScript 应用，展示了最佳实践和常见的开发模式。

## 🚀 技术栈

- **React 18** - 用于构建用户界面的 JavaScript 库
- **TypeScript** - 带有类型安全的 JavaScript 超集
- **Vite** - 快速的前端构建工具
- **CSS3** - 现代样式设计，包含渐变、毛玻璃效果和响应式布局
- **ESLint** - 代码质量检查工具

## ✨ 功能特性

### 🔢 智能计数器
- 状态管理和事件处理
- 条件渲染和数据绑定
- 按钮状态控制（防止负数）
- 实时状态显示（正数/负数/零，奇数/偶数）

### 📝 待办事项管理
- 增删改查 (CRUD) 操作
- 本地状态管理
- 数据过滤和统计
- 复杂数据结构处理

### 👤 用户管理系统
- 高级 TypeScript 类型定义
- 联合类型和接口继承
- 表单处理和验证
- 数据可视化

## 🛠️ 开发环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

## 📦 安装和运行

### 1. 克隆项目
```bash
git clone https://github.com/yqq-a/react-typescript-app.git
cd react-typescript-app
```

### 2. 安装依赖
```bash
npm install
# 或
yarn install
```

### 3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

应用将在 http://localhost:3000 启动

### 4. 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 5. 预览生产版本
```bash
npm run preview
# 或
yarn preview
```

## 📝 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产版本
- `npm run lint` - 运行 ESLint 检查
- `npm run type-check` - 运行 TypeScript 类型检查

## 🏗️ 项目结构

```
react-typescript-app/
├── public/                 # 静态资源文件
├── src/                   # 源代码目录
│   ├── components/        # React 组件
│   │   ├── Counter.tsx    # 计数器组件
│   │   ├── TodoList.tsx   # 待办事项组件
│   │   └── UserCard.tsx   # 用户卡片组件
│   ├── App.tsx           # 主应用组件
│   ├── App.css           # 应用样式
│   ├── main.tsx          # 应用入口
│   └── index.css         # 全局样式
├── index.html            # HTML 模板
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
├── vite.config.ts        # Vite 配置
└── eslint.config.js      # ESLint 配置
```

## 🎨 设计特色

- **现代化 UI**: 采用毛玻璃效果 (Glassmorphism) 设计
- **响应式布局**: 适配各种屏幕尺寸
- **动画效果**: 流畅的过渡和悬停效果
- **渐变背景**: 美观的紫蓝色渐变
- **中英双语**: 支持中文和英文界面

## 📚 学习要点

这个项目涵盖了以下 React + TypeScript 开发概念：

### React 概念
- 函数组件和 Hooks
- 状态管理 (useState)
- 事件处理
- 条件渲染
- 列表渲染
- 组件通信

### TypeScript 特性
- 接口定义 (Interface)
- 联合类型 (Union Types)
- 泛型 (Generics)
- 可选属性 (Optional Properties)
- 类型推断 (Type Inference)
- 严格的类型检查

### 最佳实践
- 组件拆分和复用
- Props 类型定义
- 事件处理器类型
- 状态类型安全
- 代码格式化和检查

## 🔧 自定义配置

### TypeScript 配置
项目使用严格的 TypeScript 配置，包括：
- 严格模式启用
- 未使用变量检查
- 类型安全保证

### ESLint 规则
配置了 React 和 TypeScript 相关的 ESLint 规则：
- React Hooks 规则
- TypeScript 推荐规则
- 代码风格统一

### Vite 配置
优化的 Vite 配置包括：
- React 插件支持
- 开发服务器配置
- 构建优化设置

## 🌐 部署

### GitHub Pages
可以轻松部署到 GitHub Pages：

1. 修改 `vite.config.ts` 中的 `base` 路径
2. 运行 `npm run build`
3. 将 `dist` 目录内容推送到 `gh-pages` 分支

### Vercel/Netlify
项目兼容 Vercel 和 Netlify 等现代部署平台，只需连接 GitHub 仓库即可自动部署。

## 🤝 贡献指南

1. Fork 这个项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🎯 下一步计划

- [ ] 添加单元测试
- [ ] 集成状态管理库 (Redux Toolkit)
- [ ] 添加路由功能 (React Router)
- [ ] 实现数据持久化
- [ ] 添加国际化支持
- [ ] 集成 UI 组件库

## 📞 联系方式

如果你有任何问题或建议，欢迎：

- 提交 Issue
- 发起 Pull Request
- 联系项目维护者

---

**Happy Coding! 编程愉快！** 🚀

> 这个项目是学习 React + TypeScript 的绝佳起点。通过实际的代码示例，你可以掌握现代前端开发的核心技能。
