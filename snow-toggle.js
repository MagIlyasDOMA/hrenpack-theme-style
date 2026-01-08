"use strict";
const snow_button = document.querySelector('#hrenpack-snow-on-off');
const cookieSnow = getCookie('snow'), lsSnow = localStorage.getItem('snow');
let snowEnabled;
if (cookieSnow)
    snowEnabled = cookieSnow;
else if (lsSnow)
    snowEnabled = lsSnow;
else
    snowEnabled = 'on';
function toggleSnow() {
    const newSO = snowEnabled === 'on' ? 'off' : 'on';
    snowEnabled = newSO;
    localStorage.setItem('snow', newSO);
    setCookie('snow', newSO);
    if (snowEnabled === 'on' && snowManager) {
    }
}
if (snow_button) {
    snow_button.addEventListener('click', toggleSnow);
}
//# sourceMappingURL=snow-toggle.js.map