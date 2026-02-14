# devpilot-cli 架构文档

## 项目目标

devpilot-cli 是一个 Node.js + TypeScript 命令行工具项目，用于训练和展示 Claude Code 的能力。通过这个项目，我们可以演示如何使用 Claude Code 进行 CLI 应用开发、代码组织、文档编写等工程实践。

## 技术栈

- **运行时：** Node.js
- **语言：** TypeScript
- **编译器：** TypeScript Compiler (tsc)
- **模块系统：** CommonJS
- **目标版本：** ES2020

## 目录结构

```
MyCalude/
├── src/
│   └── index.ts           # CLI 主入口文件
├── dist/                  # 编译输出目录（自动生成）
├── docs/
│   └── ai/
│       ├── ARCH.md        # 架构文档（本文件）
│       └── TODO.md        # 任务清单
├── package.json           # 项目配置和依赖
├── tsconfig.json          # TypeScript 编译配置
└── README.md              # 项目说明文档
```

## CLI 入口和参数处理

### 主入口文件：src/index.ts

- **Shebang：** `#!/usr/bin/env node` - 使文件可直接作为可执行脚本运行
- **参数解析：** 通过 `process.argv.slice(2)` 获取命令行参数
- **命令处理：** 使用 switch 语句分发不同的命令

### 支持的命令

| 命令 | 别名 | 功能 |
|------|------|------|
| help | -h, --help | 显示帮助信息 |
| version | -v, --version | 显示版本号 |

### 执行流程

1. 获取命令行参数
2. 如果无参数，显示帮助信息
3. 根据第一个参数匹配对应命令
4. 执行相应的处理函数
5. 未知命令时输出错误并退出

## 构建和运行

### 构建

```bash
npm run build
```

编译 TypeScript 代码到 `dist/` 目录。

### 运行

```bash
node dist/index.js --help
```

### 开发模式

```bash
npm run dev
```

编译并运行 CLI。

## 扩展方向

- 添加更多命令和子命令
- 实现配置文件支持
- 添加插件系统
- 集成更多开发工具功能
