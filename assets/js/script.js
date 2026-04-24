import moment from 'moment'
import './snow.js'
import linkedinSvg from '@phosphor-icons/core/assets/regular/linkedin-logo.svg?raw'
import githubSvg from '@phosphor-icons/core/assets/regular/github-logo.svg?raw'
import telegramSvg from '@phosphor-icons/core/assets/regular/telegram-logo.svg?raw'
import wechatSvg from '@phosphor-icons/core/assets/regular/wechat-logo.svg?raw'
import envelopeSvg from '@phosphor-icons/core/assets/regular/envelope.svg?raw'

const iconMap = {
  'linkedin-logo': linkedinSvg,
  'github-logo': githubSvg,
  'telegram-logo': telegramSvg,
  'wechat-logo': wechatSvg,
  'envelope': envelopeSvg,
}

document.querySelectorAll('i[data-ph]').forEach(el => {
  const svg = iconMap[el.dataset.ph]
  if (svg) el.outerHTML = svg
})

// --- config ---
const DATE = '812764800';
const EXPERIENCE = '1514764800';
const LOCATION = 'Vinnytsia, Ukraine';
// --------------

function calculateAge(s) {
  const day = moment(s, "X");
  const today = moment().startOf('day').hour(12);
  let age = today.year() - day.year();
  if (day > today.subtract(age, 'years')) {
    age = age - 1;
  }
  return age.toString();
}

document.getElementById('age').innerHTML = calculateAge(DATE);
document.getElementById('exp').innerHTML = calculateAge(EXPERIENCE);
document.getElementById('location').innerHTML = LOCATION;

window.onload = function () {
  document.body.className = '';
}
window.ontouchmove = function () {
  return false;
}
console.log(`%c
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
    \\   ^__^
     \\  (oo)\\_______
        (__)\\       )\\/\\
        ||----w |
        ||     ||`, "font-family:monospace");
