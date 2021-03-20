const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let keyses = Object.keys(user);

for(const key of keyses) {
    console.log(`${key}: ${user[key]}`)
}