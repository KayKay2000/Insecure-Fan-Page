fetch('/insecure/api/v1/episodes')
    .then( res => res.json())
    .then(data => {
        const episodesDiv = document.querySelector('.episodes')
        const episodesHtml = data.map((episode, index)=> {
            return `<div class="col">
            <div class="card h-100">
                <img src="${episode.img}" class="card-img-top" alt="episode image height="200px"/>
                <div class="card-body bg-dark">
                    <h3 class="card-title">${episode.name}</h5>
                    <p class="card-text">${episode.description}</p>
                    <p> Air Date: ${episode.airDate}
                </div>
                <div class="card-footer">
                    <small class="text-muted">Season: ${episode.season}</small>
                </div>
            </div>
        </div>`
        })
        episodesDiv.innerHTML = episodesHtml.join(' ')
    })




fetch('/insecure/api/v1/characters')
    .then( res => res.json())
    .then(data => {
        const charactersDiv = document.querySelector('.characters')
        const characterHtml = data.map((character, index)=>{
            return `<div class="col">
            <div class="card h-100">
                <img src="${character.img}" class="card-img-top" alt="character image">
                <div class="card-body bg-dark">
                    <h3 class="card-title">${character.name}</h5>
                    <p class="card-text">Played by: ${character.playedBy}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Episodes: ${character.episodes}</small>
                </div>
            </div>
        </div>`
        })
        charactersDiv.innerHTML = characterHtml.join(' ')
    })