CYPRESS AUTOMATION - API TESTING
======================================================

Este repositorio contiene ejercicios de automatizacion con Cypress:

- Pruebas API para la PetStore, organizadas en modulos por accion (create, get, update, delete)

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
   cd api

2. Instalar las dependencias:

   npm install

------------------------------------------------------
ESTRUCTURA DE ARCHIVOS
------------------------------------------------------

cypress/
├── integration/
│   └── user_actions/
│       ├── 01_create_user.spec.js
│       ├── 02_get_user.spec.js
│       ├── 03_update_user.spec.js
│       └── 04_delete_user.spec.js
├── support/
│   ├── commands.js
│   └── apis.js

- integration/user_actions
   Cada archivo contiene un test modular para una accion especifica de la API (crear, obtener, actualizar, eliminar usuario)
- support/commands.js
   comandos personalizados reutilizables de CRUD de usuario

------------------------------------------------------
EJECUCION DE TESTS
------------------------------------------------------

1) Ejecutar todos los tests:

   npx cypress run

2) Ejecutar tests especificos por accion:

   Los archivos estan numerados (01, 02, 03, 04) para controlar el orden de ejecucion desde la terminal, evitando conflictos entre tests dependientes.  
   Por ejemplo, para ejecutar solo el test de obtener usuario:

   npx cypress run --spec "cypress/integration/user/actions/02_get_user.spec.js"

   Esto permite debuggear una API especifica sin ejecutar las demas.

3) Alternativa: unir todos los tests en un solo archivo

   Si se prefiere, se puede combinar todos los archivos de user_actions/ en un solo spec, garantizando ejecucion en orden y simplificando el debug.

------------------------------------------------------
NOTAS/OBSERVACIONES
------------------------------------------------------

- La numeracion de archivos (01_create_user.spec.js, 02_get_user.spec.js, etc.) facilita:
  - Ejecucion controlada desde la terminal
  - Debug individual de una API sin interferencia de otras

- La modularidad permite mantener los tests limpios, reutilizables y faciles de mantener
