/*
* hrenpack-theme-style 3.3.1
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/



function get_hts_url() {
    return (document.currentScript as HTMLScriptElement).src
        .split('/').slice(0, -1).join('/') + '/'
}

const tt_button: HTMLButtonElement = document.querySelector('#hrenpack-toggle-theme')!;
const stylesheet: HTMLLinkElement = document.querySelector('#hrenpack-theme-stylesheet')!;
const cookieTheme = getCookie?.('theme'), lsTheme = localStorage.getItem('theme')
const theme_url_prefix: string = get_hts_url()
const theme_light = theme_url_prefix + 'style_light.css', theme_dark = theme_url_prefix + 'style_dark.css'
let currentTheme: string;

if (cookieTheme)
    currentTheme = cookieTheme;
else if (lsTheme)
    currentTheme = lsTheme;
else
    currentTheme = getSystemTheme() || 'light';

if (stylesheet) {
    stylesheet.setAttribute('href', currentTheme === 'light' ? theme_light : theme_dark);
}

if (tt_button) {
    tt_button.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);

        if (stylesheet) {
            // Ждем загрузки CSS перед вызовом btn_hren_update
            stylesheet.addEventListener('load', () => {
                currentTheme = newTheme;
                btn_hren_update();
                setCookie?.('theme', newTheme);
            }, { once: true });

            stylesheet.setAttribute('href', newTheme === 'light' ? theme_light : theme_dark);
        } else {
            currentTheme = newTheme;
            btn_hren_update();
            setCookie?.('theme', newTheme);
        }
    });
}
