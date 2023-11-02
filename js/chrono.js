document.addEventListener("DOMContentLoaded", function () {
    function updateClock(initTime) {
        var now = new Date();
        var milli = initTime - now.getTime();
        var day = Math.floor(milli / (1000 * 60 * 60 * 24));
        var hour = Math.floor((milli / (1000 * 60 * 60)) % 24);
        var min = Math.floor((milli / (1000 * 60)) % 60);
        var sec = Math.floor((milli / 1000) % 60);
        document.getElementById('chrono').innerHTML = "<span>" + Math.round(day) + "<br>Days</span>:<span>" + Math.round(hour) + "<br>Hours</span>:<span>" + Math.round(min) + "<br>Min</span>:<span>" + Math.round(sec) + "<br>Sec</span>";
    }
      
    function initClock() {
        var initTime = new Date("2024-05-16T19:30:00");
        updateClock();
        window.setInterval(updateClock, 1000, initTime);
    }

    initClock();
});