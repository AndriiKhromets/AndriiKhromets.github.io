let credits = 23580;
let pricePerDroid = 3000; 
let droid = prompt('Скільки ви хочете замовити ?')
let totalPrise = pricePerDroid * droid;
let creditRem = credits - totalPrise;

if (droid===null){
    console.log('Скасовано користувачем!')
} else if (totalPrise >= credits) {
    console.log("'Недостатньо коштів на рахунку!'")
} else {
    console.log(`Ви купили ${droid} дроїдів, на рахунку залишилося ${creditRem} кредитів.`)
}


  