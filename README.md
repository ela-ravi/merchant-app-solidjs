## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Commands used in this project

- npx degit solidjs/templates/js my-app
- pnpm install
- pnpm dev // Running application
- pnpm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init
- pnpm add @solidjs/router
- pnpm add -g json-server
- json-server -w -p 4000 ./data/db.json // Starts json-server and Serves db.json via json-server on port 4000 and start watching for changes

## To access from MAC

## For Personal Mail

### Prerequisite

- git config user.email "elamurugan.ravikumar@gmail.com"
- git config user.name "ela"
  where ela is username (anything we wish). Also it can be github handle (ela-ravi)

- git clone git@github-personal:ela-ravi/merchant-app-solidjs.git
  where github-personal is what the alias of host name from /Users/elamuruganravikumar/.ssh/config

## Similarly for office mail

### Prerequisite

- git config user.email "elamurugan.r@wbdcontractor.com"
- git config user.name "elamurugan-r"
  where elamurugan-r is github handle

- git clone git@github-office:DNI-MERCURY/cd_concert_client_tve.git
  where github-office is what the alias of host name from /Users/elamuruganravikumar/.ssh/config
