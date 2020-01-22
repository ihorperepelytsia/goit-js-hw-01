`use strict`;

const isYourCountry = prompt(`В какую страну доставить товар?`);
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (isYourCountry !== null) {
  switch (isYourCountry.toLowerCase()) {
    case `китай`:
      alert(`Доставка в ${isYourCountry} будет стоить ${priceChina} кредитов`);
      break;

    case `чили`:
      alert(`Доставка в ${isYourCountry} будет стоить ${priceChile} кредитов`);
      break;

    case `австралия`:
      alert(`Доставка в ${isYourCountry} будет стоить ${priceAustralia} кредитов`);
      break;

    case `индия`:
      alert(`Доставка в ${isYourCountry} будет стоить ${priceIndia} кредитов`);
      break;

    case `ямайка`:
      alert(`Доставка в ${isYourCountry} будет стоить ${priceJamaica} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
} else {
  console.log(`Отменено пользователем!`);
}
