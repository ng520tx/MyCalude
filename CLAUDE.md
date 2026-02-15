# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

**devpilot-cli** 是一个用于训练 Claude Code 能力的 Node.js + TypeScript 命令行工具项目。项目目标是通过实际的 CLI 开发演示 Claude Code 在代码组织、架构设计和工程实践中的能力。

**技术栈**：Node.js + TypeScript + CommonJS

## 开发命令

### 基础命令

```bash
# 安装依赖
npm install

# 编译 TypeScript 代码到 dist/
npm run build

# 运行编译后的 CLI
npm run start

# 编译并运行（开发模式）
npm run dev
```

### CLI 使用

```bash
# 查看帮助信息
node dist/index.js --help

# 查看版本号
node dist/index.js --version
```

## 项目架构

### 核心结构

- **入口点**：[src/index.ts](src/index.ts) - CLI 主入口文件
  - 使用原生 Node.js 参数解析（`process.argv`），无第三方依赖
  - 通过 switch 语句分发命令
  - 当前支持命令：`help`、`version`

- **编译输出**：`dist/` 目录
  - CommonJS 格式
  - 包含 source map 和类型声明文件

- **文档**：
  - [docs/ai/ARCH.md](docs/ai/ARCH.md) - 详细的项目架构说明
  - [docs/ai/TODO.md](docs/ai/TODO.md) - 项目任务清单和规划

### 命令处理流程

1. 获取命令行参数（`process.argv.slice(2)`）
2. 如果无参数，显示帮助信息
3. 根据第一个参数匹配对应命令
4. 执行相应的处理函数
5. 未知命令时输出错误并退出

## 开发约束

- **允许修改的文件**：`src/**`、`docs/**`、`package.json`、`tsconfig.json`、`README.md`
- **禁止修改**：lockfile（package-lock.json、yarn.lock 等）
- **TypeScript 配置**：启用严格模式（`strict: true`）

## 添加新命令

在 [src/index.ts](src/index.ts) 的 `main()` 函数中，向 switch 语句添加新的 case 分支：

```typescript
case "your-command":
  // 实现命令逻辑
  break;
```

## 项目规划

查看 [docs/ai/TODO.md](docs/ai/TODO.md) 了解：
- 已完成的功能
- 计划中的功能（命令扩展、测试框架、CI/CD 等）
- 当前项目阶段

## 注意事项

- 项目处于早期阶段（v0.1.0），暂无测试框架和 lint 工具
- 使用原生参数解析，保持简洁；如需复杂命令处理，可考虑引入 `commander` 或 `yargs`
- 避免过度工程化，遵循"最小必要复杂度"原则
