const express = require('express');
const insecure = require('./insecure');
// const characters = require('./insecure')
const app = express();
const port = 4000

app.use(express.static('public'))


//below is needed to see localhost in browser
app.listen(4000);
//gets all information
app.get('/insecure/api/v1/episodes', (req, res) => {
    res.json(insecure.episodes)
})

app.get('/insecure/api/v1/characters', (req , res) => {
    res.json(insecure.characters)
})

app.get('/insecure/api/v1/episodes/:episode', (req, res) => {
    const foundEpisode = insecure.episodes.find((episode) => {
        return episode.id == req.params.episode
    })
    if (foundEpisode){
        res.json(foundEpisode)
    } else {
        res.status(404)
        res.json({ error: 'Not Found'})
    }
})
app.get('/insecure/api/v1/characters/:character', (req, res) => {
    const foundCharacter = insecure.characters.find((character) => {
        return character.id == req.params.character
    })
    if (foundCharacter){
        res.json(foundCharacter)
    } else {
        res.status(404)
        res.json({ error: 'Not Found'})
    }
})


