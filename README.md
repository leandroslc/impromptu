
<h1 align="center">
  <img src="./logo.svg" width="368" alt="Impromptu" />
</h1>

<p align="center">
  A very simplistic improvised compilation of web design assets to help create a consistent design.
</p>

<p align="center">
  <strong>Used by the <a href="https://github.com/leandroslc/nocturne-auth-server">Nocturne Auth Server</a></strong>
</p>

<div align="center">
  <a href="https://github.com/leandroslc/impromptu/actions/workflows/ci.yml">
    <img src="https://github.com/leandroslc/impromptu/workflows/Build/badge.svg" alt="Build status" />
  </a>
</div>


## Quick Setup
- Clone the project.
- Make sure [Node JS](https://nodejs.org) is installed.
- Run `npm run vendor` to generate the vendor assets.
- Run `npm start` to compile and watch for changes or run `npm run build` to generate the production version.
- Run `npm run serve` to start a local server or `npm run serve:dev` to prevent caching of resources while developing.


## Customization
For now, the only way to use and customize _Impromptu_ is by cloning the project.


### Customizing styles
Most of the styles (including vendor's) are compiled using [Sass](https://sass-lang.com). There are variables that can be modified for quick customization, like colors. For _Impromptu_, these variables are placed in `scss/core/_vars.scss`. For vendors, they are usually placed in `_variables.scss` files.

**Note:** It is highly encouraged to change the default colors.


## Included assets
Beside _Impromptu_ itself, this project includes the following assets:

Name                           | Version
:----------------------------- | :------
bootstrap                      | 4.6
bootstrap-icons                | 1.4
cookieconsent                  | 3.1
fontawesome-free               | 5.15
imask                          | 6.1
jquery                         | 3.6
jquery-validation              | 1.19
jquery-validation-unobtrusive  | 3.2
