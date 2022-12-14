// Sign up form handler
async function signupFormHandler(event) {
    event.preventDefault();

    // get the information from the sign up form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // if all three fields have content
    if (username && password) {
        // POST the new user to the user table in the database
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        // when the fetch promise is fufilled, check the response status and convey the results
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);