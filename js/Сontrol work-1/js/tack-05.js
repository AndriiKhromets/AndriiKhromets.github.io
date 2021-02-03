let country = prompt("Ведіть вашу країну");
switch (country) {
  case 'Китай':
      let priceChina = 100;
    console.log(`Доставка в ${country} буде коштувати ${priceChina} кредитів`);
    break;
    case 'Чилі':
        let priceChile = 250;
      console.log(`Доставка в ${country} буде коштувати ${priceChile} кредитів`);
      break;
      case 'Австралія':
        let priceAustralia = 170;
      console.log(`Доставка в ${country} буде коштувати ${priceAustralia} кредитів`);
      break;
      case 'Індія':
        let priceIndia = 170;
      console.log(`Доставка в ${country} буде коштувати ${priceIndia} кредитів`);
      break;
      case 'Ямайка':
        let priceJamaica = 120;
      console.log(`Доставка в ${country} буде коштувати ${priceJamaica} кредитів`);
      break;
  default:
    alert(`У вашій країні доставка недоступна ${country}.`);
}