#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

const version = "0.1.0";

function showHelp(): void {
  console.log(`
devpilot-cli v${version}

Usage:
  devpilot [command] [options]

Commands:
  init [--force]       Initialize AI documentation structure
  help, -h, --help     Show this help message
  version, -v, --version  Show version

Examples:
  devpilot init
  devpilot init --force
  devpilot --help
  devpilot --version
`);
}

function showVersion(): void {
  console.log(`devpilot-cli v${version}`);
}

function handleInit(options: string[]): void {
  try {
    const force = options.includes('--force') || options.includes('-f');
    const docsAiDir = path.join(process.cwd(), 'docs', 'ai');

    // Create docs/ai directory if it doesn't exist
    if (!fs.existsSync(docsAiDir)) {
      fs.mkdirSync(docsAiDir, { recursive: true });
    }

    // Define template files
    const templates = [
      {
        name: 'ARCH.md',
        content: `# 项目架构

## 概述

[描述项目的整体架构]

## 技术栈

- 运行时：
- 语言：
- 框架：

## 目录结构

\`\`\`
[项目目录结构]
\`\`\`

## 核心模块

[描述核心模块和功能]
`
      },
      {
        name: 'TODO.md',
        content: `# 任务清单

## 进行中

- [ ] 任务1

## 待办

- [ ] 任务2
- [ ] 任务3

## 已完成

- [x] 初始化项目
`
      },
      {
        name: 'SESSION.md',
        content: `# 开发会话记录

## 会话 1 - [日期]

### 目标

[本次会话的目标]

### 完成内容

- 完成项1
- 完成项2

### 遗留问题

- 问题1
`
      }
    ];

    // Process each template file
    for (const template of templates) {
      const filePath = path.join(docsAiDir, template.name);

      if (fs.existsSync(filePath)) {
        if (force) {
          fs.writeFileSync(filePath, template.content, 'utf-8');
          console.log(`[OVERWRITE] docs/ai/${template.name}`);
        } else {
          console.log(`[SKIP] docs/ai/${template.name} (already exists, use --force to overwrite)`);
        }
      } else {
        fs.writeFileSync(filePath, template.content, 'utf-8');
        console.log(`[CREATE] docs/ai/${template.name}`);
      }
    }
  } catch (error) {
    console.error(`Error initializing project: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    showHelp();
    return;
  }

  const command = args[0];

  switch (command) {
    case "init":
      handleInit(args.slice(1));
      break;
    case "help":
    case "-h":
    case "--help":
      showHelp();
      break;
    case "version":
    case "-v":
    case "--version":
      showVersion();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      console.log("Run 'devpilot --help' for usage information.");
      process.exit(1);
  }
}

main();
