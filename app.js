const appendBand = document.querySelector('.band-info')
const appendNews = document.querySelector('.news-info')

const setlistUrl = 'https://api.setlist.fm/rest/1.0/setlist/'
const setlistKey = 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'

const newsUrl = 'https://api.nytimes.com/svc/archive/v1/1978/3.json?api-Key='
const newsKey = 'A8OOI1G1GPxPXG8m1E5jr6ghDhGogFGn'



// take result of getBand, pass through getSetlist

const getSetlist = async (band, date) => {
    band.preventDefault()
    
    const bandInput = document.querySelector('.band-input').value
    const dateInput = document.querySelector('.date-input').value
    console.log(bandInput)
    bandInput.value = ''
    dateInput.value = ''

    let setResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/setlists?artistName=${bandInput}&date=${dateInput}&p=1
    `, {
        headers: {
            'x-api-key' : 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'
        }
    })
    
    console.log(setResponse.data)
    let eventDate = setResponse.data.setlist[0].eventDate
    console.log(eventDate)
    let bandName = setResponse.data.setlist[0].artist.name
    let venueName = setResponse.data.setlist[0].venue.name
    let setlistCity = setResponse.data.setlist[0].venue.city.name
    let setlistState = setResponse.data.setlist[0].venue.city.stateCode
    let setList = setResponse.data.setlist[0].sets.set[0].song
    let setlistCountry = setResponse.data.setlist[0].venue.city.country.name
    let setlistUrl = setResponse.data.setlist[0].venue.url

    let fullSetList = ''

    setList.forEach(song => {
        fullSetList+=`<p class='song'>${song.name}</p> `
    })
    
    let bandDiv = document.createElement('div')
    bandDiv.classList.add('band-div')
    bandDiv.innerHTML = `
    <h2 class="band-name">${bandName}</h2>
    <p>${eventDate}</p>
    <p>${venueName}, ${setlistCity}, ${setlistState}, ${setlistCountry}</p>
    <p class="set-list">Set List: ${fullSetList}</p>
    
    `
    
    appendBand.append(bandDiv)

        let arr = eventDate.split("-");
        getNews(arr[2], arr[1], arr[0])
}

// const getBand = async (band) => {
//     band.preventDefault()
//     appendBand.innerHTML = ''
    
//     const bandInput = document.querySelector('.band-input').value
//     console.log(bandInput)
//     bandInput.value = ''
    
//     let mbidResponse = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${bandInput}%20AND%20type:group%20AND%20country:US`)

//     let mbid = mbidResponse.data.artists[0].id
//     // console.log(mbid)
//     getSetlist(mbid)
// }

const getNews = async (year, month, day) => {
    // ev.preventDefault()
    appendNews.innerHTML = ''

    let newsResponse = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world&fq=pub_date:"${year}-${month}-${day}"&api-key=ep9FTX8Z54fyUsBz9zwDaxII8xA6k7ML`)
     console.log(newsResponse.data)    

let newsPara = newsResponse.data.response.docs[0].lead_paragraph
let newsHeadline = newsResponse.data.response.docs[0].headline.main
let newsUrl = newsResponse.data.response.docs[0].web_url
let pubDate = newsResponse.data.response.docs[0].pub_date
// let imgPath = newsResponse.data.response.docs[0].multimedia
// let img = newsResponse.data.response.docs[0].multimedia[0].legacy.xlarge
// console.log(img)

let newsDiv = document.createElement('div')
newsDiv.classList.add('news-div')
    // if (imgPath == true) {
    // newsDiv.innerHTML = `
    // <h2 class="headline">${newsHeadline}</h2>
    // <img src="https://static01.nyt.com/${img}" alt="">
    // <p>${pubDate}</p>
    // <p class="para">${newsPara}</p>
    // <p><a href=${newsUrl}>Read more...</a></p>)`
        
    // }  
    // else (
    
    newsDiv.innerHTML = `
    <h2 class="headline">${newsHeadline}</h2>
    <p>${pubDate}</p>
    <p class="para">${newsPara}</p>
    <p><a href=${newsUrl}>Read more...</a></p>`/*)*/
    
    appendNews.append(newsDiv)

}

const form = document.querySelector('form')
form.addEventListener('submit', getSetlist)

// getBand()
// getSetlist(mbid)
// getNews()