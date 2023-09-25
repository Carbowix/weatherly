<div align="center">
  <img src='./src/public/favicon.svg' width="100px" height="100px" />
  <h1>Weatherly</h1>
</div>

<h3 align="center">A Nice and basic weather website made purely with React and Typescript</h3>

<div align="center">
  <p>
    <a href="https://github.com/Carbowix/weatherly/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/carbowix/weatherly?style=for-the-badge" alt="license mit"/>
    </a>
    <a href="https://github.com/Carbowix/weatherly">
      <img src="https://img.shields.io/github/package-json/v/carbowix/weatherly?style=for-the-badge" alt="weatherly version"/>
    </a>
    <br>
    <a href="https://discord.gg/nntu7rgxtP">
      <img src="https://img.shields.io/discord/633795546724827157?color=5865F2&logo=discord&logoColor=white" alt="Discord server" />
    </a>
  </p>
  <br>
    <a href="https://weatherly-gray.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Carbowix/weatherly/issues">Report Bug</a>
    ·
    <a href="https://github.com/Carbowix/weatherly/issues">Request Feature</a>
   
</div>
 <br>
<details>
<summary style="font-size: 21px;">Table of Contents</summary>
<ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
    </ul>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#wishlist">Wishlist</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
</details>
<br>

# Features

- Easy search that provides suggestions for up to 20+ similar cities. It also support country names, so it can view 20 cities that are inside the country.
- Weather Forecast for up to 3 days with a nice animated weather icons.
- Nice Responsive design to view on any device
- Random popular cities' weather forecast on the homepage

# Getting Started

## Prerequisites

- Latest [Node.js LTS](https://nodejs.org/en/download)
- [WeatherAPI](https://www.weatherapi.com/) key

## Installation

```bash
# Clone repo
git clone https://github.com/Carbowix/weatherly.git

# Install the required packages
## Using NPM
npm install

## Using yarn (preferred)
yarn install
```

- Add your WeatherAPI to `.env` (don't forget to rename `.env.example` obviously)

- Run the application on development mode

```bash
## Using NPM
npm run dev

## Using yarn
yarn run dev
```

# Technologies

This project is heavily based on the [reactjs-vite-tailwindcss-boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vite](https://vitejs.dev/) to build the project for development or production

# Acknowledgements

- [SYNC INTERN's](https://www.syncinterns.com/) gave me the energy to do this project
- [Animated weather icons](https://github.com/basmilius/weather-icons) by [basmilius](https://github.com/basmilius)
- [WeatherAPI](https://www.weatherapi.com/)
