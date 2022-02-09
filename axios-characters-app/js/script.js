// API handler instance
const handler = new ApiHandler()


// First load: show characters
loadAllCharacters()


// Load all characters list
function loadAllCharacters() {
    handler
        .getAllCharacters()
        .then(response => {
            let text = ''
            response.data.reverse().forEach(eachCharacter => text += `<li><strong>${eachCharacter.name} (${eachCharacter.id})</strong><br>Profesión: ${eachCharacter.occupation}<br>Arma:${eachCharacter.weapon}</li>`)
            document.querySelector('#charactersList').innerHTML = text
        })
        .catch(err => console.log(err))
}



// Handle new character form
document.querySelector('#newCharacterForm').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#newCharacterForm input')

    const characterData = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    handler
        .saveCharacter(characterData)
        .then(response => {
            document.querySelector('#newCharacterForm').reset()
            loadAllCharacters()
        })
        .catch(err => console.log(err))
}


// Retrieve character info form
document.querySelector('#characterInfoForm').onsubmit = e => {

    e.preventDefault()

    const characterId = document.querySelectorAll('#characterInfoForm input')[0].value

    handler
        .getOneCharacter(characterId)
        .then(response => {
            fillEditForm(response.data)
            document.querySelector('#characterInfoForm').reset()
        })
        .catch(err => console.log(err))
}


function fillEditForm(characterInfo) {

    const { name, occupation, weapon, id } = characterInfo

    const inputs = document.querySelectorAll('#editCharacterForm input')
    inputs[0].value = name
    inputs[1].value = occupation
    inputs[2].value = weapon
    inputs[3].value = id                // Hidden input :3
}


// Edit character form
document.querySelector('#editCharacterForm').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#editCharacterForm input')

    const characterId = inputs[3].value     // Hideen input :3

    const characterData = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    handler
        .editCharacter(characterId, characterData)
        .then(response => {
            document.querySelector('#editCharacterForm').reset()
            loadAllCharacters()
        })
        .catch(err => console.log(err))

}