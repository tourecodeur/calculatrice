async function dailtForcast(WeatherForecast){
    try{
        const response = await fetch(WeatherForecast);
        if (!response.ok) {
            throw new Error('accés impossible')
        }
        let data = await response.json();
        console.log(data);
        displayForcast(data);
    }catch(error){
        console.log(error);
    }
}
function dailtForcast(data){
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentWeekDay = daysOfTheWeek[currentDay];
    for (const[key,value]  of Object.entries.apply(data.list)) {
        let day = value.dt;
        
    }
}