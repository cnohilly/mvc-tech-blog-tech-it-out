async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            console.log(response);
            // $('.alert-text').text(response.message);
        }
    } else {
        $('.alert-text').text('Must provide username and password')
    }
    $('.login-alert').removeClass('d-none');
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);