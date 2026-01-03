document.addEventListener('DOMContentLoaded', () => {
    const form: HTMLFormElement | null = document.querySelector(
        document.currentScript!.dataset.formSelector || '.form')
    if (form)
        input_form_control_unline(form)
})
