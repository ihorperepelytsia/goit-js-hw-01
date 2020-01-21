`use strict`;

const isYourCountry = prompt(`В какую страну доставить товар?`);

switch (isYourCountry.toLowerCase()) {
  case `китай`:
    let priceChina = `100 кредитов`;
    alert(`Доставка в ${isYourCountry} будет стоить ${priceChina} кредитов`);
    break;

  case `чили`:
    let priceChile = `250 кредитов`;
    alert(`Доставка в ${isYourCountry} будет стоить ${priceChile} кредитов`);
    break;

  case `австралия`:
    let priceAustralia = `170 кредитов`;
    alert(
      `Доставка в ${isYourCountry} будет стоить ${priceAustralia} кредитов`
    );
    break;

  case `индия`:
    let priceIndia = `80 кредитов`;
    alert(`Доставка в ${isYourCountry} будет стоить ${priceIndia} кредитов`);
    break;

  case `ямайка`:
    let priceJamaica = `120 кредитов`;
    alert(`Доставка в ${isYourCountry} будет стоить ${priceJamaica}`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
