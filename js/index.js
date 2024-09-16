const cell_phone_number = document.getElementById('cellphone-number').innerText;
const cellphone_copy_button = document.getElementById('cellphone-copy-button');

const email = document.getElementById('email').innerText;
const email_copy_button = document.getElementById('email-copy-button');


const copyCellPhoneNumber = async () => {
    try {
        await navigator.clipboard.writeText(cell_phone_number);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}


const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

cellphone_copy_button.addEventListener('click', copyCellPhoneNumber)

email_copy_button.addEventListener('click', copyEmail)