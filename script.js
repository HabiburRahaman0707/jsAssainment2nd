const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const post = document.getElementById('post');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const postValue = post.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    const isValidphone = phone => {
        const re = /^([0-9]){11}$/;
        return re.test(String(phone))
        }
    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else if (!isValidphone(phoneValue)) {
        setError(phone, 'Phone Number must be at least 11 digits.')
    } else {
        setSuccess(phone);
    }
    const isValidpost = post => {
        const re = /^([0-9]){4}$/;
        return re.test(String(post))
    
        
        }
    if(postValue === '') {
        setError(post, 'Post code is required');
    } else if (!isValidpost(postValue)) {
        setError(post, "Post code doesn't match");
    } else {
        setSuccess(post);
    }

};
