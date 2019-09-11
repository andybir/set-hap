const appendBand = document.querySelector('.band-info')
const appendNews = document.querySelector('.news-info')
const bandInput = document.querySelector('.band-input').value
bandInput.value = ''
console.log(bandInput)

const setlistUrl = 'https://api.setlist.fm/rest/1.0/setlist/'
const setlistKey = 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'

const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us'
const newsKey = 'bb7273a136e2478cbdb97f6b01fb4d51'

// const getSetlist = async (ev) => {
//     // ev.preventDefault()
//     appendBand.innerHTML = ''

    // let setResponse = await axios.get('https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/setlist/3bdae43c', {
    //     headers: {
    //         'x-api-key' : 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'
    //     }
    // })

    // console.log(setResponse.data)
//     let eventDate = setResponse.data.eventDate
//     let bandName = setResponse.data.artist.name
//     let venueName = setResponse.data.venue.name
//     let setlistCity = setResponse.data.venue.city.name
//     let setlistState = setResponse.data.venue.city.stateCode
//     let setList = setResponse.data.sets.set[0].song
//     let setlistCountry = setResponse.data.venue.city.country.name

//     // console.log(setList)
//     let fullSetList = ''

//     setList.forEach(song => {
//         fullSetList+=`<p class='song'>${song.name}</p> `
//     })
// //create if statement or 
//     // console.log(fullSetList)
    
//     let bandDiv = document.createElement('div')
//     bandDiv.innerHTML = `
//     <p>Date: ${eventDate}</p>
//     <p>Band: ${bandName}</p>
//     <p>Venue: ${venueName}, ${setlistCity}, ${setlistState}, ${setlistCountry}</p>
//     <p>Set List: ${fullSetList}</p>`
    
//     appendBand.append(bandDiv)
// }

const getNews = async (ev) => {
    // ev.preventDefault()
    appendNews.innerHTML = ''

    let newsResponse = await axios.get('https://api.nytimes.com/svc/archive/v1/1978/3.json?api-key=A8OOI1G1GPxPXG8m1E5jr6ghDhGogFGn')
     console.log(newsResponse.data)    

let newsLead = newsResponse.data.response.docs[0].lead_paragraph
// console.log(newsSnippet)
let newsHeadline = newsResponse.data.response.docs[0].headline.main
// console.log(newsHeadline)
let newsUrl = newsResponse.data.response.docs[0].web_url
// console.log(newsUrl)

let newsDiv = document.createElement('div')
    newsDiv.innerHTML = `
    <p>${newsHeadline}</p>
    <p>${newsLead}</p>
    <p><a href=${newsUrl}>Read more...</a></p>`
    
    appendNews.append(newsDiv)

}

const getBand = async (ev) => {
    // ev.preventDefault()
    // appendBand.innerHTML = ''
let mbidResponse = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${bandInput}%20AND%20type:group%20AND%20country:US`)
console.log(mbidResponse.data)
}

getBand()
// getSetlist()
getNews()