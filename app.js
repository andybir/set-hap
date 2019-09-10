const appendBand = document.querySelector('.band-info')
const appendNews = document.querySelector('.news-info')

const setlistUrl = 'https://api.setlist.fm/rest/1.0/setlist/'
const setlistKey = 'dDDQqRHrKqVuXBxZYXZ_DX3fDgaQbPdS6LX8'

const getSetlist = async (ev) => {
    ev.preventDefault()
}
async function getWeather(zip) {
    try {
        
        appendWeather.innerHTML = ''
        let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=4f83ebcc5d3931db44f879f803f2fac9`)