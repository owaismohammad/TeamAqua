const api_key = "038c86ad7ab8df614352e41f2db2882c";
const city_name = document.querySelector('#js-city-name');
const city_zipcode = document.querySelector('#js-country-code');
const roof_size=document.querySelector('#js-roof-size')
const enterBtn=document.querySelector('.js-enter-btn')
var outputDisplay=document.querySelector('.card-content')
var cardContents=[`        <div class="card-body">
<h4 class="card-title">Discover Your Rainwater Harvesting Insights</h4>
<p class="card-content"></p>
    <h6 class="card-subtitle">Suggestions for Uses of Collected Rainwater:</h6>
        <ul>
            <li>Outdoor Watering: Suitable for watering small gardens, potted plants, or limited outdoor spaces.</li>
            <li>Car Washing: Enough water to wash a few cars occasionally.</li>
            <li>Cleaning Purposes: Adequate for occasional outdoor cleaning tasks such as washing sidewalks or small outdoor surfaces.</li>
        </ul>
</div>`];

var cardElement=document.querySelector(".card");
var spinner = document.querySelector('.js-spinner');
var loadingText = document.querySelector('.js-loading-text');

enterBtn.addEventListener("click",()=>{
    var cityName=city_name.value;
    var cityZipcode=Number(city_zipcode.value);
    var roofSize=Number(roof_size.value);
    spinner.classList.remove('d-none');
    loadingText.classList.remove('d-none');
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${cityZipcode}&appid=${api_key}`)
    .then(response => response.json())
    .then(city_data => {
        const city_latitude = parseFloat(city_data[0].lat);
        const city_longitude = parseFloat(city_data[0].lon);

        
        fetch(`https://history.openweathermap.org/data/2.5/aggregated/year?lat=${city_latitude}&lon=${city_longitude}&appid=${api_key}`)
            .then(response => response.json())
            .then(rain_data => {
                const rainList=rain_data.result;
                var totalPrecipitation=0;
                var rainVolume;
                rainList.forEach((val,index)=>{
                    totalPrecipitation+=val.precipitation.mean;
                    console.log(val.precipitation.mean);
                });
                console.log(rainList);


                
                rainVolume=totalPrecipitation*roofSize;
                cardElement.innerHTML=cardContents[0];
                cardElement.classList.remove('d-none');
                var outputDisplay=document.querySelector('.card-content')
                outputDisplay.innerHTML=`Implementing rainwater harvesting could save you approximately ${rainVolume} liters of water annually, making your water usage more sustainable and environmentally friendly. `;
                spinner.classList.add('d-none');
                loadingText.classList.add('d-none');

            })
            .catch(error => {
                console.error("Error fetching rain data:", error);
                spinner.classList.add('d-none');
                loadingText.classList.add('d-none');
            });
    })
    .catch(error => {
        console.error("Error fetching city data:", error);
        spinner.classList.add('d-none');
        loadingText.classList.add('d-none');
    })



    

})

let modal = document.getElementById("howToPlayModal");
let btn = document.getElementById("howToPlayBtn");

// get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
btn.addEventListener("click", function() {
    modal.style.display = "block";
});

// close effect 
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// close outside modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

