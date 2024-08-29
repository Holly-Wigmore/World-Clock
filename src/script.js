function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesTimeZone.format(
      "hh:mm:ss [<small>]A[</small]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    let parisTimeZone = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTimeZone.format("MMMM Do YYYY");
    parisTime.innerHTML = parisTimeZone.format("hh:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = citiesElement = `
    <div class="city-container">
      <div>
        <h2 class="city">${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#select-city");
citySelect.addEventListener("change", updateCity);
