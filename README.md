# MiniTwitter registration and posts

[English](#overview) · [Español](#resumen)

## Overview

Angular exercise that sends a registration request, stores the returned token and reads posts. The relevant code is split between the form and two HTTP services.

The external MiniTwitter service has not been contacted in this review. Error recovery, session handling and a current build remain unverified. Use fictional inputs while studying the request flow.

- [`registro.component.ts`](src/app/registro/registro.component.ts)
- [`auth.service.ts`](src/app/Services/auth.service.ts)
- [`tweets.service.ts`](src/app/Services/tweets.service.ts)

[package.json](package.json): The package file records the original scripts and dependencies; package-lock.json retains their resolution.

## Resumen

Ejercicio Angular que envía un registro, guarda el token recibido y consulta publicaciones. El código se reparte entre el formulario y dos servicios HTTP.

No se ha contactado con el servicio externo de MiniTwitter en esta revisión. Quedan sin verificar la recuperación de errores, la sesión y un build actual. Usa datos ficticios al estudiar el flujo de peticiones.

Consulta los archivos enlazados arriba para seguir la implementación. [package.json](package.json): El paquete recoge los scripts y dependencias originales; package-lock.json conserva su resolución.

<details>
<summary>Original documentation and credits · Documentación y créditos originales</summary>

# LoginAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

</details>

[More of my work · Más proyectos](https://github.com/navalcode)
