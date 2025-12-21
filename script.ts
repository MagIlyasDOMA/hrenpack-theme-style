/*
* hrenpack-theme-style 3.2.6
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/

function getButtonColor(button: HTMLButtonElement, isHoverOrActive: boolean = false) {
    if (button.classList.contains('btn-hren-ahren')) {
        return isHoverOrActive
            ? stylesRoot.getPropertyValue('--hrenpack-button-hover-color')
            : stylesRoot.getPropertyValue('--hrenpack-background');
    } else {
        return isHoverOrActive
            ? stylesRoot.getPropertyValue('--hrenpack-button-hover-color')
            : stylesRoot.getPropertyValue('--hrenpack-foreground');
    }
}

function getButtonTextColor(button: HTMLButtonElement) {
    return button.classList.contains('btn-hren-ahren')
        ? stylesRoot.getPropertyValue('--hrenpack-foreground')
        : stylesRoot.getPropertyValue('--hrenpack-background');
}

function btn_hren_press() {
    const buttons: ButtonArray = document.querySelectorAll('.btn-hren');
    buttons.forEach(button => {
        // Инициализация начальных стилей
        button.style.backgroundColor = getButtonColor(button);
        button.style.color = getButtonTextColor(button);

        button.addEventListener('mousedown', function() {
            button.style.backgroundColor = stylesRoot.getPropertyValue('--hrenpack-button-pressed-color');
            button.style.color = getButtonTextColor(button);
        });

        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = getButtonColor(button, true);
            button.style.color = getButtonTextColor(button);
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = getButtonColor(button);
            button.style.color = getButtonTextColor(button);
        });

        button.addEventListener('mouseup', function() {
            button.style.backgroundColor = getButtonColor(button, true);
            button.style.color = getButtonTextColor(button);
        });

        button.addEventListener('mouseleave', function() {
            button.style.backgroundColor = getButtonColor(button);
            button.style.color = getButtonTextColor(button);
        });
    });
}

function btn_hren_update() {
    const buttons: ButtonArray = document.querySelectorAll('.btn-hren')
    buttons.forEach(button => {
        button.style.backgroundColor = getButtonColor(button);
        button.style.color = getButtonTextColor(button);
    })
}

window.onload = function () {
    btn_hren_press()
}