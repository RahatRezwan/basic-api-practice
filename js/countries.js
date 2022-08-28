const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById("coutries-container");

    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach((country) => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
        <img src='${country.flags.png}'>
        <h2>Common Name: ${country.name.common} </h2>
        <h2>Oficial Name: ${country.name.official}</h2>
        <h2>Capital: ${country.capital}</h2>
        <h3>Population: ${country.population}</h3>
        <button onclick = "loadCountryDetails('${country.cca3}')">Details</button>`;
        countriesContainer.appendChild(countryDiv);
    });
};

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(code);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCountryDetail(data));
};

const displayCountryDetail = (data) => {
    console.log(data);
};

getCountries();
