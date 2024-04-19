const KEY =  '5ec8d9e33158aff8b48c0208994065a8'


const getDate = async(city) => {
    const base =  'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const request = await fetch(base + query)
    const data = await request.json()
    loader(false)


    return data
}



