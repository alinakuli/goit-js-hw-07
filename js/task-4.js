const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if ( email === "" || password === "") {
        return alert('All form fields must be filled in');
    }
    const gatheredValues = Object.create(event);
    gatheredValues.email = email;
    gatheredValues.password = password;
    console.log(gatheredValues);
    
    form.reset();
}

loginForm.addEventListener("submit", handleSubmit)
