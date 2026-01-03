"use strict";
const snow_optimization_button = document.querySelector('#hrenpack-snow-optimization-on-off');
const cookieSnowOptimization = getCookie('snowOptimization'), lsSnowOptimization = localStorage.getItem('snowOptimization');
let snowOptimization;
if (cookieSnowOptimization)
    snowOptimization = cookieSnowOptimization;
else if (lsSnowOptimization)
    snowOptimization = lsSnowOptimization;
else
    snowOptimization = 'on';
function toggleSnowOptimization() {
    const newSO = snowOptimization === 'on' ? 'off' : 'on';
    localStorage.setItem('snowOptimization', newSO);
    setCookie('snowOptimization', newSO);
}
if (snow_optimization_button) {
    snow_optimization_button.addEventListener('click', toggleSnowOptimization);
}
//# sourceMappingURL=toggle-snow-optimization.js.map