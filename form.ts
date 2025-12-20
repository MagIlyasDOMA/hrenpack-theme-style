/*
* hrenpack-theme-style 3.2.0
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/

declare function input_form_control_unline(form: HTMLFormElement): void;

document.addEventListener('DOMContentLoaded', () => {
    const form: HTMLFormElement | null = document.querySelector(
        document.currentScript!.dataset.formSelector || '.form')
    if (form)
        input_form_control_unline(form)
})
