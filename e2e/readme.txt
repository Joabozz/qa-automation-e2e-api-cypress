CYPRESS AUTOMATION - E2E TESTING
======================================================

Este repositorio contiene ejercicios de automatizacion con Cypress:

- Pruebas E2E para el flujo completo de compra en SauceDemo

------------------------------------------------------
REQUISITOS
------------------------------------------------------

• Node.js instalado
• Cypress instalado como dependencia del proyecto

------------------------------------------------------
INSTALACION
------------------------------------------------------

1. Clonar este repositorio:

   git clone https://github.com/Joabozz/qa-automation-e2e-api-cypress.git
   cd e2e

2. Instalar las dependencias:

   npm install

------------------------------------------------------
ESTRUCTURA DE ARCHIVOS
------------------------------------------------------

cypress/
├── e2e/
│   └── e2e_saucedemo.spec.js
├── support/
│   ├── commands.js
│   └── e2e.js

- cypress/e2e/e2e_saucedemo.spec.js
  Contiene todo el flujo completo del test E2E en un solo archivo.

- support/commands.js
  Comandos personalizados reutilizables (login, agregar productos, completar checkout)

------------------------------------------------------
EJECUCION DE TESTS
------------------------------------------------------

1) Ejecutar el test E2E completo:

   npx cypress run

2) Ejecutar en modo interactivo (GUI):

   npx cypress open

Luego seleccionar:

   E2E Testing → Chrome/Edge/Firefox → e2e_saucedemo.spec.js