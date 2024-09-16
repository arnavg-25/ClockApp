



function updateTime(){
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();


    const clock = document.getElementById("clock");

    clock.textContent = `${hours}:${minutes}:${seconds}`

}

setInterval(updateTime, 1000)






