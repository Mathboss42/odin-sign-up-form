function checkPasswordsOnSubmit() {
    const firstPassword = document.querySelector('.password').value;
    const secondPassword = document.querySelector('.passwordconfirm').value;

    if (firstPassword != secondPassword) {
        alert("\nPasswords did not match, please try again");
        return false;
    } else {
        return true;
    }
}



function checkPasswordsOnInput() {
    const firstPassword = document.querySelector('.password').value;
    const secondPassword = document.querySelector('.passwordconfirm').value;

    if (firstPassword != secondPassword) {
        document.querySelector('.password').classList.add('no-match');
        document.querySelector('.passwordconfirm').classList.add('no-match');
        document.querySelector('.row:nth-child(3)').classList.add('no-match');
    } else {
        document.querySelector('.password').classList.remove('no-match');
        document.querySelector('.passwordconfirm').classList.remove('no-match');
        document.querySelector('.row:nth-child(3)').classList.remove('no-match');
    }
}