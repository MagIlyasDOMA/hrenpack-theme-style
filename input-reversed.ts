/*
* hrenpack-theme-style 3.2.0
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/

interface IsInputFirstOutput {
    input: Node;
    label: Node;
    isFirst: boolean;
}

function isInputFirst(paragraph: HTMLParagraphElement): IsInputFirstOutput {
    const input = paragraph.querySelector('input');
    const label = paragraph.querySelector('label');
    const output = {input: input as Node, label: label as Node, isFirst: false}

    // Проверяем, что оба элемента существуют
    if (input && label) {
        const elements = paragraph.children;
        let inputIndex = -1;
        let labelIndex = -1;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === input) inputIndex = i;
            if (elements[i] === label) labelIndex = i;
        }

        output.isFirst = inputIndex !== -1 && labelIndex !== -1 && inputIndex < labelIndex
    }
    return output
}

function formInputReversed(form: HTMLFormElement) {
    form.querySelectorAll('p').forEach(paragraph => {
        const {input, label, isFirst} = isInputFirst(paragraph);
        if (isFirst) {
            const wrapper = document.createElement('wrapper');
            wrapper.appendChild(input)
            wrapper.appendChild(label)
            paragraph.appendChild(wrapper)
            paragraph.classList.add('input-reversed')
        }
    })
}
