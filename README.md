# Create Cloudflare App

## Overview

This is a starter project for building a Cloudflare App with Babel (for the latest ES features), ESLint, and Prettier (for keeping things clean).

Download this app and replace our code any time you want to build an Cloudflare app.

## Features

#### Cloudflare DNS

Your Cloudflare App can configure the [DNS Records](https://api.cloudflare.com/#dns-records-for-a-zone-properties) of any domain on Cloudflare.

#### Cloudflare Workers

Your Cloudflare App can include a single [Cloudflare Worker](https://developers.cloudflare.com/workers/) that runs each time your app is loaded.

## Setup

Fork and clone the repo or download the [latest release](https://github.com/CloudflareApps/CreateCloudflareApp/releases/latest).

Install the dependencies with `npm install`.

## Usage

- `npm start` Sets up your dev environment and runs Webpack in watch mode.
- `npm run build` Lints your project and compiles your JavaScript and CSS once for release.

### Other Interesting Scripts

- `npm run dev:setup` Add other initialization scripts to your development pipeline here.

The project uses [yarn-run-all](https://www.npmjs.com/package/yarn-run-all) which makes it easy to run tasks in series or parallel using `yarn` or `npm`.

## Details

#### `install.json`

This is where all the [installer options](https://www.cloudflare.com/apps/developer/docs/install-json) are added for the app.

Use the DNS field to configure [Cloudflare DNS Records](https://api.cloudflare.com/#dns-records-for-a-zone-properties). If you don't want to configure DNS, just delete this field.

#### `src/index.js`

This is where the magic happens. Your app starts here.

#### `src/styles.css`

Write your app styles here.

#### `workers/worker.js`

Use this file to add a [Cloudflare Worker](https://developers.cloudflare.com/workers/) to your app. Each app may contain one worker. If you don't want to use workers, just delete this file along with the workers configuration in `install.json`.

#### `media/**`

Put your icons, tile images, and screenshots to be used in your Cloudflare Apps page here.

[Download <code class="inline">media-templates.sketch</code>](https://github.com/CloudflareApps/MediaTemplates/raw/master/media-templates.sketch)

### Troubleshooting

The Cloudflare [developer documentation](https://www.cloudflare.com/apps/developer/docs/getting-started) for examples and API usage.

<!--
<a href="https://www.cloudflare.com/apps/[[YOUR APP ALIAS]]/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install [[YOUR APP NAME]] with Cloudflare"
    border="0"
    width="150">
</a> -->
