# AnimatedMobileFirst

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

# Project Description

Basically this is a test project which can be used as a tutorial for creating mobile first web applications in Angular. Since it's a mobile oriented project, we use a `HammerJS` library here to handle such mobile events as `swipe`. Also one of the most important feaures of mobile webapps are animations: they are implemented with `Angular Animations` tools. To create carousel sliders here, we decided to use `ngx-hm-carousel` library since it includes a simple built-in API. And `requestAnimationFrame` method was used to resize a video element on scroll since on mobile devices video size should be adjusted depending on a visible part of a video container when a user scrolls the page.

## Dependencies

Run `yarn install` to add all dependecies to this project. Once it's done, you can simply run the project locally.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
