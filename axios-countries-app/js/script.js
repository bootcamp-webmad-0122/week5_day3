document.querySelector('#countryName').onkeyup = () => {
    const countryName = document.querySelector('#countryName').value
    getCountryInfo(countryName)
}


function getCountryInfo(countryName) {

    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => printCountryInfo(response.data))
        .catch(err => console.log(err))
}


function printCountryInfo(countries) {

    let text = `Hay un total de ${countries.length} países que hacen match.<br>`
    text += "<hr>"

    const { altSpellings, capital, population, flag } = countries[0]

    text += `El primer país es ${altSpellings[2]} tiene como capital ${capital}.<br>`
    text += `Con una población de ${population} habitantes, su bandera es ${flag}`

    document.querySelector('#result').innerHTML = text
}