setInterval(()=>
{
    const time =document.querySelector('.display #time');
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12)
    {
        day_night = "PM";
        hours = hours-12;
    }
    if(seconds < 10)
    {
        seconds = "0" +seconds;
    }
    if(minute<10)
    {
        minute ="0" +minute;
    }
    if(hours <10)
    {
        hours="0"+hours;
    }
    time.textContent = hours + ":" + minute + ":" + seconds + " " + day_night;
});