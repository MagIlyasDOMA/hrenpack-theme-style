declare type OnOffType = 'on' | 'off'
type OptionalOnOffType = Optional<OnOffType>

const snow_optimization_button: Optional<HTMLButtonElement> = document.querySelector(
    '#hrenpack-snow-optimization-on-off')

const cookieSnowOptimization: OptionalOnOffType = getCookie('snowOptimization') as OptionalOnOffType,
    lsSnowOptimization: OptionalOnOffType = localStorage.getItem('snowOptimization') as OptionalOnOffType;

let snowOptimization: OnOffType;

if (cookieSnowOptimization)
    snowOptimization = cookieSnowOptimization
else if (lsSnowOptimization)
    snowOptimization = lsSnowOptimization
else snowOptimization = 'on'

function toggleSnowOptimization() {
    const newSO = snowOptimization === 'on' ? 'off' : 'on';
    localStorage.setItem('snowOptimization', newSO);
    setCookie('snowOptimization', newSO);
}


if (snow_optimization_button) {
    snow_optimization_button.addEventListener('click', toggleSnowOptimization)
}
