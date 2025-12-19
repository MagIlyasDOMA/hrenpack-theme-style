"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SnowProperty(target, propertyKey, descriptor) {
    if (descriptor.get) {
        descriptor.get = function () {
            const instance = this;
            if (instance.snow) {
                return instance.snow.params[propertyKey];
            }
            return null;
        };
    }
    if (descriptor.get) {
        descriptor.set = function (value) {
            const instance = this;
            if (instance.snow) {
                instance.snow.params[propertyKey] = value;
                return;
            }
            throw new Error(`Cannot set ${String(propertyKey)} - snow instance destroyed`);
        };
    }
    return descriptor;
}
class SnowManager {
    constructor(options = {}) {
        Object.defineProperty(this, "snow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isActive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isActive = true;
        this.snow = new Snowflakes(this.initConfig(options));
        this.setupVisibility();
    }
    initConfig(config) {
        return {
            container: config.container ?? document.body,
            count: config.count ?? 50,
            color: config.color ?? '#5ecdef',
            minOpacity: config.minOpacity ?? 0.6,
            maxOpacity: config.maxOpacity ?? 1,
            minSize: config.minSize ?? 10,
            maxSize: config.maxSize ?? 25,
            rotation: config.rotation ?? false,
            speed: config.speed ?? 1,
            stop: config.stop ?? false,
            types: config.types ?? 6,
            wind: config.wind ?? true,
            zIndex: config.zIndex ?? 9999,
            autoResize: config.autoResize ?? true,
        };
    }
    setupVisibility() {
        const handleVisibility = () => {
            document.hidden ? this.pause() : this.play();
        };
        document.addEventListener('visibilitychange', handleVisibility);
        window.addEventListener('blur', () => this.pause());
        window.addEventListener('focus', () => this.play());
    }
    pause() {
        if (this.snow && this.isActive) {
            this.snow.pause();
            this.isActive = false;
        }
    }
    play() {
        if (this.snow && !this.isActive) {
            this.snow.play();
            this.isActive = true;
        }
    }
    toggle() {
        this.isActive ? this.pause() : this.play();
    }
    destroy() {
        if (this.snow) {
            this.snow.destroy();
            this.snow = null;
        }
    }
    get container() {
        return this.snow?.container ?? null;
    }
    set container(container) {
        if (this.snow) {
            this.snow.container = container;
            return;
        }
        throw new Error("Unable to set container - SnowManager is destroyed");
    }
    get count() { return null; }
    set count(value) { }
    get color() { return ''; }
    set color(value) { }
    get minOpacity() { return null; }
    set minOpacity(value) { }
    get maxOpacity() { return null; }
    set maxOpacity(value) { }
    get minSize() { return null; }
    set minSize(value) { }
    get maxSize() { return null; }
    set maxSize(value) { }
    get rotation() { return null; }
    set rotation(value) { }
    get speed() { return null; }
    set speed(value) { }
    get stop() { return null; }
    set stop(value) { }
    get types() { return null; }
    set types(value) { }
    get width() { return null; }
    set width(value) { }
    get height() { return null; }
    set height(value) { }
    get wind() { return null; }
    set wind(value) { }
    get zIndex() { return null; }
    set zIndex(value) { }
    get autoResize() { return null; }
    set autoResize(value) { }
}
__decorate([
    SnowProperty
], SnowManager.prototype, "count", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "color", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "minOpacity", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "maxOpacity", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "minSize", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "maxSize", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "rotation", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "speed", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "stop", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "types", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "width", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "height", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "wind", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "zIndex", null);
__decorate([
    SnowProperty
], SnowManager.prototype, "autoResize", null);
let snowManager;
document.addEventListener('DOMContentLoaded', () => {
    snowManager = new SnowManager({
        color: '#abcdef',
        zIndex: 50,
        count: 400,
        minOpacity: 0.4,
        maxOpacity: 0.7,
        speed: 3
    });
    setTimeout(() => { snowManager.speed = 1; }, 3000);
});
//# sourceMappingURL=snow.js.map