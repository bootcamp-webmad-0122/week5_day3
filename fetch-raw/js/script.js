document.querySelector('button').onclick = () => {

    fetch('https://coasters-api.herokuapp.com/')
        .then(response => response.json())
        .then(coasters => {
            let text = ''
            coasters.forEach(eachCoaster => text += `<li>${eachCoaster.name}: longitud ${eachCoaster.length} metros</li>`)
            document.querySelector('#coasters').innerHTML = text
        })
}