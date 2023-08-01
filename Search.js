const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
icon.onclick = function() {
search.classList.toggle('active')                
}
let input = document.querySelector('input')
input.addEventListener('keyup', async (e) => {
    if (e.keyCode === 13) {
        let searchResult = e.target.value
        let data = await getUser(searchResult) 
        localStorage.setItem('playerStats', JSON.stringify(data))
        location.href = "Index.html"             
    }                
})

async function getUser(searched) {
    let accessToken = "5154e299-a9b9-45f0-b5e2-c4f3017a8f14"

    let url = "https://fortnite-api.com/v2/stats/br/v2?name=" + searched
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
        }
    });
    return response.json();
}