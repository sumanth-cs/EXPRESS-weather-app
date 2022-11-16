const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value ;
    if(cityVal === ""){
        city_name.innerText = "!!!plz enter the name of the city";
        datahide.classList.add("data_hide");
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=20816d2ba843292e85f5cb5d09b64b1c`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood === "Clear"){
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color:orange"></i>`
            }
            else if (tempMood === "Clouds"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color:white"></i>`
            }
            else if (tempMood === "Rain"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color:aquablue"></i>`
            }
            else {
                temp_status.innerHTML = `<i class="fa-solid fa-rainbow"></i>`
            }

            datahide.classList.remove("data_hide");

            
        }
        catch{
            city_name.innerText = "!!!plz enter the name of the city properly";
            datahide.classList.add("data_hide");

        }
    }
}



submitBtn.addEventListener("click",getInfo);