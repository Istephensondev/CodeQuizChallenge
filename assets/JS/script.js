var buttonEl = document.querySelector("#start");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {
    var time = 90;

    setInterval(function () {
        time = time - 1;
        console.log(time);
        document.getElementById('timer').innerText = time;
    }, 1000);
});

  // start timer 

