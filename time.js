let timer = document.querySelector('#timer');
let start = document.querySelector('#start');
let astop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let msec = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let timeid = null;

start.addEventListener('click', () => {
    if (timeid !== null) {
        clearInterval(timeid);
    }
    timeid = setInterval(starttimer, 1);
});

astop.addEventListener('click', () => {
    clearInterval(timeid);
});

reset.addEventListener('click', () => {
    clearInterval(timeid);
    [msec, secs, mins,hrs] = [0, 0, 0, 0];
    timer.innerHTML = "00 : 00 : 00 : 000";
});

function starttimer() {
    msec++;
    if (msec == 1000) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
            if (mins == 60) {
                mins = 0;
                hrs++;
            }
        }
    }
    let h = hrs < 10 ? '0' + hrs : hrs;
    let m = mins < 10 ? '0' + mins : mins;
    let s = secs < 10 ? '0' + secs : secs;
    let ms = msec < 10 ? '00' + msec : msec < 100 ? "0" + msec : msec;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}