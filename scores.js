const fetch = require('node-fetch');





function fetchTeamsAndScores(){

    fetch('https://api.foxsports.com/sportsdata/v1/basketball/nba/events.json?enable=broadcasts%2Cvideos%2Codds%2Cteamdetails&date=20200107&apikey=jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq')
    .then(res => res.json())
    .then(response => {
        let listOfGames = response.page
        
        for(let game of listOfGames){
            let homeTeam = `${game.homeTeam.location} ${game.homeTeam.name}`
            let awayTeam = `${game.awayTeam.location} ${game.awayTeam.name}`
            let homeScore = game.score.homeScore
            let awayScore = game.score.awayScore
            let timeRemaining = game.score.timeRemaining
            let currentPeriod = game.score.currentPeriod
            let status = game.status.name
            let currentStatus = ''
            if (status === "Final") {
                currentStatus = status
            } else {
                currentStatus = `${currentPeriod} ${timeRemaining}`
            }
            let teamsAndScores = `${homeTeam} ${homeScore} ${awayTeam} ${awayScore} ${status}`
            let converted1 = JSON.stringify(teamsAndScores)
            // console.log(converted1)
            return converted1
        }           
    });
}



    function fetchTeasers(){

        fetch('https://api.foxsports.com/sportsdata/v1/live/nba/scores.json?enable=teaser%2Ctopperformers%2Clastplay&date=20200107&t=20200108050525&apikey=jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq')
        .then(res => res.json())
        .then(response => {
            let listOfTeasers = response
            for(let game of listOfTeasers){
                let nugget = game.Teaser.Text
                let converted = JSON.stringify(nugget)
                return converted
            }       
        });
    }


