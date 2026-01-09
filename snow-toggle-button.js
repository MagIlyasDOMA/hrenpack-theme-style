"use strict";
const snowSvg = snow_button.querySelector('img');
const snowToggleButtonImages = {
    on: 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abcdef"><path d="M441-71v-181L301-113l-57-56 197-196v-76h-76L173-248l-58-55 136-138H71v-79h180L112-660l57-57 196 197h76v-77L248-788l56-58 137 137v-180h79v180l140-140 56 57-196 195v77h77l192-193 57 56-136 137h179v79H710l137 140-55 57-195-197h-77v76l196 197-55 57-141-141v181h-79Z"/></svg>',
    onAnimation: 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M441-71v-181L301-113l-57-56 197-196v-76h-76L173-248l-58-55 136-138H71v-79h180L112-660l57-57 196 197h76v-77L248-788l56-58 137 137v-180h79v180l140-140 56 57-196 195v77h77l192-193 57 56-136 137h179v79H710l137 140-55 57-195-197h-77v76l196 197-55 57-141-141v181h-79Z" fill="#abcdef"/><line x1="760" y1="-760" x2="200" y2="-200" stroke="#aa0000" stroke-width="100" stroke-linecap="round" stroke-dasharray="800" stroke-dashoffset="800"><animate attributeName="stroke-dashoffset" values="0; 800" dur="0.8s" begin="0s" fill="freeze"/></line></svg>',
    off: 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M441-71v-181L301-113l-57-56 197-196v-76h-76L173-248l-58-55 136-138H71v-79h180L112-660l57-57 196 197h76v-77L248-788l56-58 137 137v-180h79v180l140-140 56 57-196 195v77h77l192-193 57 56-136 137h179v79H710l137 140-55 57-195-197h-77v76l196 197-55 57-141-141v181h-79Z" fill="#abcdef"/><line x1="760" y1="-760" x2="200" y2="-200" stroke="#aa0000" stroke-width="100" stroke-linecap="round" stroke-dasharray="800" stroke-dashoffset="800"><animate attributeName="stroke-dashoffset" values="0; 0" dur="0.8s" begin="0s" fill="freeze"/></line></svg>',
    offAnimation: 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M441-71v-181L301-113l-57-56 197-196v-76h-76L173-248l-58-55 136-138H71v-79h180L112-660l57-57 196 197h76v-77L248-788l56-58 137 137v-180h79v180l140-140 56 57-196 195v77h77l192-193 57 56-136 137h179v79H710l137 140-55 57-195-197h-77v76l196 197-55 57-141-141v181h-79Z" fill="#abcdef"/><line x1="760" y1="-760" x2="200" y2="-200" stroke="#aa0000" stroke-width="100" stroke-linecap="round" stroke-dasharray="800" stroke-dashoffset="800"><animate attributeName="stroke-dashoffset" values="800; 0" dur="0.8s" begin="0s" fill="freeze"/></line></svg>'
};
document.addEventListener('DOMContentLoaded', () => {
    if (snow_button) {
        if (snowSvg)
            snowSvg.src = snowEnabled ? snowToggleButtonImages.on : snowToggleButtonImages.off;
        snow_button.addEventListener('click', () => {
            if (snowSvg)
                snowSvg.src = snowEnabled ? snowToggleButtonImages.onAnimation : snowToggleButtonImages.offAnimation;
        });
    }
});
//# sourceMappingURL=snow-toggle-button.js.map