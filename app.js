const appendBand = document.querySelector('.band-info')
const appendNews = document.querySelector('.news-info')

const setlistUrl = 'https://api.setlist.fm/rest/1.0/setlist/'
const setlistKey = 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'

const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us'
const newsKey = 'bb7273a136e2478cbdb97f6b01fb4d51'

const getSetlist = async (ev) => {
    // ev.preventDefault()
    appendBand.innerHTML = ''

    let setResponse = await axios.get('https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/setlist/3bd700dc', {
        headers: {
            'x-api-key' : 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'
        }
    })

    console.log(setResponse.data)
    let eventDate = setResponse.data.eventDate
    let bandName = setResponse.data.artist.name
    let venueName = setResponse.data.venue.name
    let setlistCity = setResponse.data.venue.city.name
    let setlistState = setResponse.data.venue.city.stateCode
    let setList = setResponse.data.sets.set[0].song
    let setlistCountry = setResponse.data.venue.city.country.name

    console.log(setList)
    let fullSetList = ''

    setList.forEach(song => {
        fullSetList+=`<p class='song'>${song.name}</p> `
    })
//create if statement or 
    console.log(fullSetList)
    
    let bandDiv = document.createElement('div')
    bandDiv.innerHTML = `
    <p>Date: ${eventDate}</p>
    <p>Band: ${bandName}</p>
    
    <p>Venue: ${venueName}, ${setlistCity}, ${setlistState}, ${setlistCountry}</p>
    <p>Set List: ${fullSetList}</p>`
    
    appendBand.append(bandDiv)
}

// const getNews = async (ev) => {
//     // ev.preventDefault()
//     appendNews.innerHTML = ''

//     let newsResponse = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
//         headers: {
//             'x-api-key' : 'bb7273a136e2478cbdb97f6b01fb4d51'
//         }
//     })

getSetlist()