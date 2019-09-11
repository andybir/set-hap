const appendBand = document.querySelector('.band-info')
const appendNews = document.querySelector('.news-info')

const setlistUrl = 'https://api.setlist.fm/rest/1.0/setlist/'
const setlistKey = 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'

const getSetlist = async (ev) => {
    // ev.preventDefault()
    appendBand.innerHTML = ''

    let response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/setlist/3bd600dc', {
        headers: {
            'x-api-key' : 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'
        }
    })

    const setInfo = {}

    console.log(response.data)
    let eventDate = response.data.eventDate
    let bandName = response.data.artist.name
    let venueName = response.data.venue.name
    let setlistCity = response.data.venue.city.name
    let setlistState = response.data.venue.city.stateCode
    let setList = response.data.sets.set[0].song
    let bandTour = response.data.tour.name

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
    <p>Tour: ${bandTour}</p>
    <p>Venue: ${venueName}, ${setlistCity}, ${setlistState}</p>
    <p>Set List: ${fullSetList}</p>
    `

    // let eventDate = document.createElement('p')
    // eventDate.innerHTML = `Date: ${setInfo.eventDate}`
    // appendBand.append(eventDate)

    // let bandName = document.createElement('p')
    // bandName.innerHTML = `Band: ${setInfo.bandName}`
    // appendBand.append(bandName)
    
    // let venueName = document.createElement('p')
    // venueName.innerHTML = `Venue: ${setInfo.venueName}`
    // appendBand.append(venueName)
    
    // let setlistCity = document.createElement('p')
    // setlistCity.innerHTML = `City: ${setInfo.setlistCity}`
    // appendBand.append(setlistCity)
    appendBand.append(bandDiv)

}

getSetlist();
// async function getWeather(zip) {
//     try {
        
//         appendWeather.innerHTML = ''
        