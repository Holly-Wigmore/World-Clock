function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesTimeZone = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimeZone.format(
    "hh:mm:ss [<small>]A[</small]"
  );
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisTimeZone = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTimeZone.format("MMMM Do YYYY");
  parisTime.innerHTML = parisTimeZone.format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
