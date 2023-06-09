
const validate = (input) => {
    
    let errors = {};

    if (!input.email) {
        errors.email = 'Email requerido';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)) {
        errors.email = 'Debe introducir un email válido';
    } else if (!/^.{0,35}$/.test(input.email)) {
        errors.email = 'Debe contener 35 caracteres como máximo';
    }

    if (!/^.{6,10}$/.test(input.password)){
        errors.password = 'Debe contener entre 6 y 10 caracteres'
    }

    if (!/\d/.test(input.password)) {
        errors.password = 'Debe contener al menos un número'
    }
    
    return errors;
}

export default validate;