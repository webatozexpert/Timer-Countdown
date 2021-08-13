const eidulfitr ="05 September 2022";

const yearsDiv = document.getElementById("years");
const monthsDiv = document.getElementById("months");
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minsDiv = document.getElementById("mins");
const secDiv = document.getElementById("sec");

function countdown(){
    const eidday = new Date(eidulfitr);
    const currentday = new Date();

    const totaltime = (eidday - currentday)/1000;
    const years = Math.floor(totaltime / 3600 /24/30/12);
    const months = Math.floor(totaltime / 3600 ) % 12;
    const days = Math.floor(totaltime / 3600) % 30;
    const hours = Math.floor((totaltime / 3600) % 24);
    const mins = Math.floor(totaltime / 60) % 60;
    const seconds = Math.floor(totaltime )  % 60;

    yearsDiv.innerHTML = years;
    monthsDiv.innerHTML = months;
     daysDiv.innerHTML = days;
     hoursDiv.innerHTML = hours;
     minsDiv.innerHTML = mins;
     secDiv.innerHTML = seconds;


    console.log(years,months,days,hours,mins,seconds);
}
countdown();
setInterval(countdown,1000);