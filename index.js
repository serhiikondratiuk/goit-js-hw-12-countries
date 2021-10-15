import countryCard from './src/templates/country-card.hbs';
fetch('https://restcountries.com/v3.1/name/peru')
 .then(response => response.json())
 .then(country => {
  console.log(country);
  const markup = countryCard(country);
  document.body.insertAdjacentHTML('beforeend', markup);
 });
