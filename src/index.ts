#!/usr/bin/env node

const version = "0.1.0";

function showHelp(): void {
  console.log(`
devpilot-cli v${version}

Usage:
  devpilot [command] [options]

Commands:
  help, -h, --help     Show this help message
  version, -v, --version  Show version

Examples:
  devpilot --help
  devpilot --version
`);
}

function showVersion(): void {
  console.log(`devpilot-cli v${version}`);
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    showHelp();
    return;
  }

  const command = args[0];

  switch (command) {
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
