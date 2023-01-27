const nombre = document.querySelector('#name');
const foto = document.querySelector('#fotos');
const textEmail = document.querySelector('#info-adicional8');
const textPhone = document.querySelector('#info-adicional9');
const textCell = document.querySelector('#info-adicional10');
const textUsername = document.querySelector('#info-adicional11');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const cell = document.querySelector('#cell');
const username = document.querySelector('#user');

const url = 'https://randomuser.me/api/';

const obtenerDatos = async () => {
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0]
    
    nombre.textContent = datos.name.first + " " + datos.name.last
    foto.src = datos.picture.large

        email.addEventListener('click', () => {
        textEmail.textContent = "Email: " + datos.email
    })  

        phone.addEventListener('click', () =>{
        textPhone.textContent = "Phone: " + datos.phone
    }) 

        cell.addEventListener('click', () => {
        textCell.textContent = "Cell: " + datos.cell
    } ) 

        username.addEventListener('click', () => {
        textUsername.textContent = "User: " + datos.login.username
    })
}  

document.addEventListener('DOMContentLoaded', obtenerDatos);
