## IDE Setup

### Setting up your IDE (VS Code)

1. Open Jest extension ([link](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)) and install
2. Open up Preferences, then go to "settings.json"
3. Add these two lines:

```json
{
  "jest.jestCommandLine": "npm run test:vscode --",
  "jest.autoRun": "off"
}
```

### Setting up your IDE (VS Code)

4. Search in Command palette to "Open 'launch.json'"
5. Paste in this configuration under `configurations` ([link](https://gist.github.com/AndrewSouthpaw/d74048ec04ffddaf7c3b6281aa92d2d0)):

```json
{
  "type": "node",
  "name": "vscode-jest-tests",
  "request": "launch",
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "disableOptimisticBPs": true,
  "cwd": "${workspaceFolder}",
  "runtimeExecutable": "npm",
  "env": {
    "ENVIRONMENT": "dev",
    "SHARE_EMULATOR_PROJECT_ID": "true"
  },
  "args": [
    "run",
    "test:vscode",
    "--",
    "--runInBand",
    "--watchAll=false"
  ]
}
```

### Setting up your IDE (Webstorm)

`Ctrl + Shift + R`:
  : Run the test(s) at your cursor.

`Ctrl + R`:
  : Re-run the test(s).

Set up your default environment variables:

`Edit Configurations` > `Edit config templates...` > `Jest`

Usually you might want:

`ENVIRONMENT=dev;SHARE_EMULATOR_PROJECT_ID=true`

### Debugging in Webstorm

`Ctrl + Shift + D`:
  : Debug the test(s) at your cursor.

`Ctrl + D`:
  : Re-debug the test(s).
