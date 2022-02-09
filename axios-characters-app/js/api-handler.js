class ApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }


    getAllCharacters() {
        return this.axiosApp.get('/characters')
    }

    getOneCharacter(characterId) {
        return this.axiosApp.get(`/characters/${characterId}`)
    }

    saveCharacter(characertInfo) {
        return this.axiosApp.post('/characters', characertInfo)
    }

    editCharacter(characterId, characterInfo) {
        return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
    }
}