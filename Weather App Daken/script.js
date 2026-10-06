const apiKey = "c120490d8c538235f5bd4c58fabff4aa";

async function getWeather(){

    const city=document.getElementById("city").value;

    if(city===""){

        document.getElementById("error").innerHTML="Please enter a city name.";
        document.getElementById("weatherResult").style.display="none";
        return;

    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        if(!response.ok){

            throw new Error("City not found");

        }

        const data=await response.json();

        document.getElementById("cityName").innerHTML=data.name;

        document.getElementById("temp").innerHTML=data.main.temp;

        document.getElementById("humidity").innerHTML=data.main.humidity;

        document.getElementById("wind").innerHTML=data.wind.speed;

        document.getElementById("condition").innerHTML=data.weather[0].main;

        document.getElementById("weatherResult").style.display="block";

        document.getElementById("error").innerHTML="";

    }

    catch(error){

        document.getElementById("error").innerHTML="City not found.";

        document.getElementById("weatherResult").style.display="none";

    }

}