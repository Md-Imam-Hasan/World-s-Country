// https://restcountries.eu/rest/v2/all
fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => displayCountry(data));

const displayCountry = data => {
  console.log(data);
  const allCountryName = document.querySelector(".all-country-name");
  data.forEach(countryObj => {
    const countryDiv = document.createElement("div");
    countryDiv.className = 'country'
    countryDiv.innerHTML = `
      <h1>${countryObj.name}</h1>
      <h5>${countryObj.capital}</h5>
      <a href="#details"><button onclick="displayCountryDetails('${countryObj.name}')">Details</button></a>`;
    allCountryName.appendChild(countryDiv);
  });
}

const displayCountryDetails = name => {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => renderDetails(data[0]));
}

const renderDetails = countryObj => {
  console.log(countryObj);
  const countryDetails = document.querySelector(".country-details");
  countryDetails.innerHTML = `
    <img src="${countryObj.flag}" alt="">
    <h1>${countryObj.name}</h1>
    <h3>${countryObj.capital}</h3>
    <h5>Population: ${countryObj.population}</h5>
    <h5>Area: ${countryObj.area} square kilometer</h5>`
}