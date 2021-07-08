# Hamza

Source code for my official portfolio application that hosts:

- [My official website](https://site.hrahimy.com)
- Positive Affirmations Mobile app. See code [here](https://github.com/HRahimy/positive_affirmations) /* TODO: migrate
  positive affirmations code to this repository */

## Setup

- I generated this project using [Nx](https://nx.dev).
- Monorepo that holds code (or references to the code) for all my projects here.
- Single access point for all my apps.

### Local setup

1. [Install Node LTS version](https://nodejs.dev/)
2. [Install Yarn globally](https://yarnpkg.com/getting-started/install)
   ```
   npm install -g yarn
   ```
   [Optional] On Windows, you might need to set the path for yarn binaries in environment variables. The following path should work:
   ```
   C:\Users\`USER`\AppData\Local\Yarn\bin
   ```
3. [Install Angular CLI](https://angular.io/guide/setup-local)
   ```
   yarn global add @angular/cli
   ```
4. Set yarn as the default package manager for Angular CLI
   ```
   ng config --global cli.packageManager yarn
   ```
5. Build the app
   ```
   nx build api --prod
   nx build site --prod
   ```

6. If you haven't already, [install docker](https://www.docker.com/).
7. Containerize the app
   ```
   docker build . --tag "hamzasite:latest"
   ```
