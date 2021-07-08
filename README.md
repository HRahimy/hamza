# Hamza

Source code for my official portfolio application that hosts:

- [My official website](https://site.hrahimy.com)
- Positive Affirmations Mobile app. See code [here](https://github.com/HRahimy/positive_affirmations) /* TODO: migrate
  positive affirmations code to this repository */

## Setup

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
5. [Install docker](https://www.docker.com/)
6. Enable Kubernetes on your docker installation. You can find the option from Docker settings.
7. [Install Helm](https://helm.sh/docs/intro/install/)

### Local setup

1. Clone the repository to a desired location
   ```
   git clone https://github.com/HRahimy/hamza
   cd hamza
   ```
1. Build the app
   ```
   nx build api --prod
   nx build site --prod
   ```
2. Containerize the app
   ```
   docker build . --tag "hamzasite:latest"
   ```
3. Start the app through the helm local chart
   ```
   cd charts/site-local
   helm install hamzasite .
   ```
4. Use the app by going to `localhost`
