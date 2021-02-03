let messeng = prompt('Ведіть пароль')
const ADMIN_PASSWORD = 'asdf';
if  (messeng===ADMIN_PASSWORD) {
    console.log('Ласкаво просимо!')
} else if (messeng === null) {
    console.log('Скасовано користувачем!')
} else {
    console.log('Доступ заборонений, невірний пароль!')
}
alert(messeng);