const validateForm = (form) => {
    const errores = {};

    for (let input in form) {
        if (form[input].required) {
            if (typeof form[input].value === "undefined" || form[input].value === "" || form[input].value === null) {
                errores[input] = `Este campo ${input} es requerido`;
            }
        }

        switch (form[input].type) {
            case "text":
                if (!isNaN(form[input].value)) {
                    errores[input] = `Este campo ${input} debe ser de tipo ${form[input].type}`;
                }
                break;
            case "number":
                if (isNaN(form[input].value) || typeof form[input].value !== "number") {
                    errores[input] = `Este campo ${input} debe ser de tipo ${form[input].type}`;
                }
                break;
            case "email":
                const rejectEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!form[input].value.match(rejectEmail)) {
                    errores[input] = `Est campo ${input} debe ser una dirección de correo válida`;
                }
                break;
            case "date":
                const rejectDate = /^\d{4}-\d{2}-\d{2}$/;
                if (!form[input].value.match(rejectDate)) {
                    errores[input] = `Este campo ${input} debe estar en el formato 'YYYY-MM-DD'`;
                }
                break;
        }
    }
    return errores;
};

module.exports = {
    validateForm
};
