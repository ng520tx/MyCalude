# devpilot-cli

用来测试和训练 Claude Code 的 Node.js + TypeScript CLI 工具项目。

## 项目简介

devpilot-cli 是一个命令行工具，用于展示和训练 Claude Code 在实际项目开发中的能力。通过这个项目，我们可以演示如何使用 Claude Code 进行：

- CLI 应用开发
- TypeScript 项目配置
- 代码组织和架构设计
- 文档编写
- 测试和质量保证

## 快速开始

### 安装依赖

```bash
npm install
```

### 构建项目

```bash
npm run build
```

编译 TypeScript 代码到 `dist/` 目录。

### 运行 CLI

```bash
# 显示帮助信息
node dist/index.js --help

# 显示版本号
node dist/index.js --version
```

### 开发模式

```bash
npm run dev
```

编译并运行 CLI。

## 项目结构

```
src/
  └── index.ts           # CLI 主入口文件
docs/
  └── ai/
      ├── ARCH.md        # 架构文档
      └── TODO.md        # 任务清单
package.json             # 项目配置和依赖
tsconfig.json            # TypeScript 编译配置
```

## 开发说明

### 添加新命令

编辑 `src/index.ts`，在 `main()` 函数的 switch 语句中添加新的 case 分支。

### 构建输出

编译后的 JavaScript 文件位于 `dist/` 目录，可以直接通过 Node.js 运行。

### 查看架构

详细的项目架构说明请参考 [docs/ai/ARCH.md](docs/ai/ARCH.md)。

### 查看任务清单

项目的任务清单和进度请参考 [docs/ai/TODO.md](docs/ai/TODO.md)。

## 许可证

MIT
