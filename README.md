<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://delos.co.id/">
    <img src="https://ik.imagekit.io/istoreimages/delos-web/logo/delos/1_Ab3zy16sC.png" alt="Logo" width="200">
  </a>

  <h3 align="center">React Archetype</h3>

  <p align="center">
    <a href="#!">View Demo</a>
    ·
    <a href="https://github.com/delos-co/archetype-react-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/delos-co/archetype-react-js/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#domain">Domain</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#vscode-exte">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">How to Build</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a structure to be a template in reactjs application development
### Domain
#### Preproduction
* base url

### Built With

* [React.js](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Typescript](https://www.typescriptlang.org/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### VSCode Extensions Recommendation

* Name: ESLint
Description: Integrates ESLint JavaScript into VS Code.
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

* Name: Tailwind CSS IntelliSense
Description: Intelligent Tailwind CSS tooling for VS Code
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

* Name: Prettier - Code formatter
Description: Code formatter using prettier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:delos-co/archetype-react-js.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Enter `.env`
   ```js
   REACT_APP_BASE_URL_API = 
   ```
4. Run projects
   ```sh
   yarn start
   ```
   
### How to Build

1. Preproduction Environment _(.env.staging)_
   ```sh
   npm run build:staging
   ```
2. Production Enviroment _(.env.production)_
   ```sh
   npm run build:production
   ```

<!-- CONTRIBUTING -->
## Contributing

Fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'add: some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

