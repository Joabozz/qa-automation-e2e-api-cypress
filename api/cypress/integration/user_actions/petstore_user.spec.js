// describe('Crear Usuario', () => {
//     beforeEach(() => {
//         cy.fixture('users').as('userData');
//     });

//     // Crear un nuevo usuario
//     it('Crear un nuevo usuario', function () { 
//         cy.createUser(this.userData.newUser).then((res) => {
//             // Validar la respuesta HTTPS sea 200
//             expect(res.status).to.eq(200);
//             // Validar que el ID del usuario en la respuesta coincida con el ID enviado
//             expect(res.body.message).to.eq(String(this.userData.newUser.id));
//         });
//     });
  
//     // Obtener informacion de usuario
//     it('Obtener el usuario creado', function () {
//         cy.getUser(this.userData.newUser.username).then((res) => {
//             // Validar la respuesta HTTPS sea 200
//             expect(res.status).to.eq(200);
//             // Validar que el nombre de usuario en la respuesta coincida con el nombre de usuario enviado
//             expect(res.body.username).to.eq(this.userData.newUser.username);
//             // Loggear la informacion del usuario obtenido
//             cy.log(JSON.stringify(res.body));
//         });
//     });

//     // Actualizar un usuario
//     it('Actualizar nombre y correo del usuario', function () {
//         cy.updateUser(this.userData.newUser.username, this.userData.updatedUser)
//         .then((res) => {
//             // Validar la respuesta HTTPS sea 200
//             expect(res.status).to.eq(200);
//         });
//     });


//     it('Validar los cambios del usuario', function () {
//         cy.getUser(this.userData.newUser.username).then((res) => {
//             // Validar la respuesta HTTPS sea 200
//             expect(res.status).to.eq(200);
//             // Validar que los datos del usuario hayan sido actualizados
//             Object.keys(this.userData.newUser).forEach(key => {
//                 expect(res.body[key]).to.eq(this.userData.updatedUser[key]);
//             });
//         });
//     });

//     //Borrar un usuario
//     it('Eliminar al usuario', function () {
//         cy.deleteUser(this.userData.updatedUser.username).then((res) => {
//             //Validar la respuesta HTTPS sea 200
//             expect(res.status).to.eq(200);
//         });
//     });

// });