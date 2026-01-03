"use strict";
function get_hts_url() {
    return document.currentScript.src
        .split('/').slice(0, -1).join('/') + '/';
}
const tt_button = document.querySelector('#hrenpack-toggle-theme');
const stylesheet = document.querySelector('#hrenpack-theme-stylesheet');
const cookieTheme = getCookie?.('theme'), lsTheme = localStorage.getItem('theme');
const theme_url_prefix = get_hts_url();
const theme_light = theme_url_prefix + 'style_light.css', theme_dark = theme_url_prefix + 'style_dark.css';
let currentTheme;
if (cookieTheme)
    currentTheme = cookieTheme;
else if (lsTheme)
    currentTheme = lsTheme;
else
    currentTheme = getSystemTheme() || 'light';
if (stylesheet) {
    stylesheet.setAttribute('href', currentTheme === 'light' ? theme_light : theme_dark);
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
}
if (tt_button) {
    tt_button.addEventListener('click', toggleTheme);
}
//# sourceMappingURL=dark-theme.js.map