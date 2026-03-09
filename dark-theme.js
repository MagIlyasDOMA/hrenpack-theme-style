"use strict";
function get_hts_url() {
    return document.currentScript.src
        .split('/').slice(0, -1).join('/') + '/';
}
var useIcon = false;
const tt_button = document.querySelector('#hrenpack-toggle-theme');
const stylesheet = document.querySelector('#hrenpack-theme-stylesheet');
const cookieTheme = getCookie?.('theme'), lsTheme = localStorage.getItem('theme');
const theme_url_prefix = get_hts_url();
const theme_light = theme_url_prefix + 'style_light.css', theme_dark = theme_url_prefix + 'style_dark.css';
let currentTheme;
const lightIcon = 'https://cdn.jsdelivr.net/npm/hrenpack-theme-style@3.8.0/toggle-theme/light.svg';
const darkIcon = 'https://cdn.jsdelivr.net/npm/hrenpack-theme-style@3.8.0/toggle-theme/dark.svg';
if (cookieTheme)
    currentTheme = cookieTheme;
else if (lsTheme)
    currentTheme = lsTheme;
else
    currentTheme = getSystemTheme() || 'light';
if (stylesheet) {
    stylesheet.setAttribute('href', currentTheme === 'light' ? theme_light : theme_dark);
}
function setButtonIcon() {
    if (useIcon) {
        let icon = tt_button.querySelector('img');
        if (!icon) {
            icon = document.createElement('img');
            tt_button.innerHTML = '';
            tt_button.appendChild(icon);
        }
        icon.src = currentTheme === 'light' ? darkIcon : lightIcon;
    }
}
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    if (stylesheet) {
        stylesheet.addEventListener('load', () => {
            currentTheme = newTheme;
            btn_hren_update();
            setCookie?.('theme', newTheme);
        }, { once: true });
        stylesheet.setAttribute('href', newTheme === 'light' ? theme_light : theme_dark);
    }
    else {
        currentTheme = newTheme;
        btn_hren_update();
        setCookie?.('theme', newTheme);
    }
    setButtonIcon();
}
if (tt_button) {
    tt_button.addEventListener('click', toggleTheme);
}
document.addEventListener('DOMContentLoaded', setButtonIcon);
//# sourceMappingURL=dark-theme.js.map