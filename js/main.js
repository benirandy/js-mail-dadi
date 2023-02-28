const authorizedEmails = ['beni@flick.it', 'marcoblanco@flick.it', 'giuseppegerx@flick.it'];

let userToVerify = prompt('write your email');


console.log(authorizedEmails);
console.log(userToVerify);



for (i = 0; i < authorizedEmails.length; i++) {

    let user = authorizedEmails[i]; //da modificare
    if (userToVerify == user) {
        console.log('Welcome');

    } else if (userToVerify !== user) {
        console.log('you cannot access!');

    } else {
        console.log('you cannot access!');
    }
}