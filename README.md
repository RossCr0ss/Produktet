# Produktet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run jsonserver` to run mock backend server.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How it works

Before Angular app is started http request to get json configuration will be triggered. Request will be triggered from `core.module.ts` see `APP_INITIALIZER` provider.

TODO restructure `db.json` to get json configuration depending on domain name.

Configuration example:

"layout": {
  "template": "basic-layout"
},
"header": {
  "template": "basic-header"
},
"footer": {
  "template": "basic-footer"
}

`layout` is type of template that will be used. Different layouts can have different positions of child elements. `layout` is mandatory for every page.
See `basic-layout.component.html`.

`header, footer, menu` and other components are elements that will be rendered inside one layout.

`dynamic-loader` is main component in the application. Component is responsible for loading all dynamic modules.


