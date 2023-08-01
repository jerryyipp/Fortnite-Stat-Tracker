function loadStats() {
    storedStats = JSON.parse(localStorage.getItem('playerStats'))

    return storedStats
}

const { data: { stats: { all: { duo, overall, solo, squad }} }, status} = loadStats();
console.log(overall)
console.log(solo)
console.log(duo)
console.log(squad)


var lifetime = document.createElement('div')
var solos = document.createElement('div')
var duos = document.createElement('div')
var squads = document.createElement('div')

lifetime.id = 'lifetime'
solos.id = 'solos'
duos.id = 'duos'
squads.id = 'squads'

lifetime.innerHTML = "Lifetime Stats: " + "<br/>" + 
                    "Wins: " + overall.wins + "<br/>" +
                    "Win Percentage: " + overall.winRate + "<br/>" +
                    "K/D: " + overall.kd + "<br/>" +
                    "Matches: " + overall.matches + "<br/>" +
                    "Kills: " + overall.kills + "<br/>" +
                    "Deaths: " + overall.deaths + "<br/>";

solos.innerHTML = "Solo Stats: " + "<br/>" + 
                    "Wins: " + solo.wins + "<br/>" +
                    "Win Percentage: " + solo.winRate + "<br/>" +
                    "K/D: " + solo.kd + "<br/>" +
                    "Matches: " + solo.matches + "<br/>" +
                    "Kills: " + solo.kills + "<br/>" +
                    "Deaths: " + solo.deaths + "<br/>";


duos.innerHTML = "Duo Stats: " + "<br/>" + 
                "Wins: " + duo.wins + "<br/>" +
                "Win Percentage: " + duo.winRate + "<br/>" +
                "K/D: " + duo.kd + "<br/>" +
                "Matches: " + duo.matches + "<br/>" +
                "Kills: " + duo.kills + "<br/>" +
                "Deaths: " + duo.deaths + "<br/>";     
                
squads.innerHTML = "Squad Stats: " + "<br/>" + 
                "Wins: " + squad.wins + "<br/>" +
                "Win Percentage: " + squad.winRate + "<br/>" +
                "K/D: " + squad.kd + "<br/>" +
                "Matches: " + squad.matches + "<br/>" +
                "Kills: " + squad.kills + "<br/>" +
                "Deaths: " + squad.deaths + "<br/>"; 

document.body.appendChild(lifetime)
document.body.appendChild(solos)
document.body.appendChild(duos)
document.body.appendChild(squads)



