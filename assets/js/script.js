function calculateAge(s) {
    var bday = moment(s, "X");
    var today = moment().startOf('day').hour(12);
    var age = today.year() - bday.year();
    if (bday > today.subtract(age, 'years'))
        age = age - 1;
    return age;
}

var age = calculateAge('812764800');

document.querySelector('#header > p > span').innerHTML = age;
window.onload = function () {
    document.body.className = '';
}
window.ontouchmove = function () {
    return false;
}
window.onorientationchange = function () {
    document.body.scrollTop = 0;
}
console.log(`%c 
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
    \\   ^__^
     \\  (oo)\\_______
        (__)\\       )\\/\\
        ||----w |
        ||     ||`, "font-family:monospace");