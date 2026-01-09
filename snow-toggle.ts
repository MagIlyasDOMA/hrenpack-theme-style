const snow_button: Optional<HTMLButtonElement> = document.querySelector('#hrenpack-snow-on-off')

const cookieSnow: OptionalOnOffType = getCookie('snow') as OptionalOnOffType,
    lsSnow: OptionalOnOffType = localStorage.getItem('snow') as OptionalOnOffType;

let snowEnabled: OnOffType;

if (cookieSnow)
    snowEnabled = cookieSnow
else if (lsSnow)
    snowEnabled = lsSnow
else snowEnabled = 'on'

function toggleSnow() {
    const newSO = snowEnabled === 'on' ? 'off' : 'on';
    snowEnabled = newSO;
    localStorage.setItem('snow', newSO);
    setCookie('snow', newSO);
    if (snowManager) {
        if (snowEnabled === 'on') snowManager.restore()
        else snowManager.destroy()
    }
}

if (snow_button) snow_button.addEventListener('click', toggleSnow)
