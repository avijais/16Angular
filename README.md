# 16AngExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## HighChart
## 1.Reference
`1. https://www.highcharts.com/blog/tutorials/highcharts-with-angular-v14/`
`2. https://github.com/highcharts/highcharts-angular#installing`

## 2. To install highcharts-angular and the Highcharts library run the following instruction:
`npm install highcharts-angular --save.`

## 3. To import the package go to `app.module.ts` file and import the module `HighchartsChartModule` from the `highcharts-angular` package.

## 4. To build Highcharts charts, install Highcharts:
`npm install highcharts --save.`


## Console warning when using Organaization highcharts, fixed issue
`Warning`
Warning: D:\workspace\angular\16Angular\16Angular\src\app\app.component.ts depends on 'highcharts/modules/exporting'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Warning: D:\workspace\angular\16Angular\16Angular\src\app\app.component.ts depends on 'highcharts/modules/organization'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Warning: D:\workspace\angular\16Angular\16Angular\src\app\app.component.ts depends on 'highcharts/modules/sankey'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

`Fixed`
Added following line of key and array pair in angular.json -> `options` object
#### `"options": {`
#####    `"allowedCommonJsDependencies": [`
#####        `"highcharts"`
#####    `],`