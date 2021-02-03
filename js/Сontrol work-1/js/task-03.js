let messeng = prompt('Ведіть пароль')
const ADMIN_PASSWORD = 'asdf';
if  (messeng===ADMIN_PASSWORD) {
    alert('Ласкаво просимо!')
} else if (messeng === null) {
    alert('Скасовано користувачем!')
} else {
    alert('Доступ заборонений, невірний пароль!')
}
