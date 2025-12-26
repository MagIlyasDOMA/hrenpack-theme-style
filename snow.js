"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    if (descriptor.set) {
        descriptor.set = function (value) {
            const instance = this;
            if (instance.snow) {
                const currentParams = instance.snow.params;
                const newParams = {
                    ...currentParams,
                    [propertyKey]: value
                };
                instance.snow.destroy();
                instance.snow = new Snowflakes(newParams);
                return;
            }
            throw new Error(`Cannot set ${String(propertyKey)} - snow instance destroyed`);
        };
    }
    return descriptor;
}
function toNumber(input, numberType, defaultValue) {
    let output;
    if (!input)
        return defaultValue;
    switch (numberType) {
        case 'int':
            output = parseInt(input);
            break;
        case 'float':
            output = parseFloat(input);
            break;
        default:
            throw new Error(`Invalid number type ${numberType}`);
    }
    return !isNaN(output) ? output : defaultValue;
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
        Object.defineProperty(this, "_optimize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.isActive = true;
        this._optimize = options.optimize ?? true;
        this.snow = new Snowflakes(this.initConfig(options));
        this.setupVisibility();
    }
    static fromScriptDataset(script) {
        let options = {};
        if (script) {
            const dataset = script.dataset;
            const optimize = !('noOptimize' in dataset);
            options = {
                count: toNumber(dataset.count, 'int', 50),
                color: dataset.color || '#5ecdef',
                minOpacity: toNumber(dataset.minOpacity, 'float', 0.6),
                maxOpacity: toNumber(dataset.maxOpacity, 'float', 1),
                minSize: toNumber(dataset.minSize, 'float', 10),
                maxSize: toNumber(dataset.maxSize, 'int', 25),
                rotation: 'rotation' in dataset,
                speed: toNumber(dataset.speed, 'int', 1),
                stop: 'stop' in dataset,
                types: toNumber(dataset.types, 'int', 6),
                zIndex: toNumber(dataset.zIndex, 'int', 9999),
                optimize: optimize,
            };
        }
        return new SnowManager(options);
    }
    initConfig(config) {
        const snowConfig = {
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
        if (config.width !== undefined)
            snowConfig.width = config.width;
        if (config.height !== undefined)
            snowConfig.height = config.height;
        return snowConfig;
    }
    setupVisibility() {
        const handleVisibility = () => {
            if (this._optimize) {
                document.hidden ? this.pause() : this.play();
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);
        window.addEventListener('blur', () => {
            if (this._optimize)
                this.pause();
        });
        window.addEventListener('focus', () => {
            if (this._optimize)
                this.play();
        });
    }
    pause() {
        if (this.snow && this.isActive) {
            this.snow.stop();
            this.isActive = false;
        }
    }
    play() {
        if (this.snow && !this.isActive) {
            this.snow.start();
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
    get optimize() {
        return this._optimize;
    }
    set optimize(value) {
        this._optimize = value;
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
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "count", null);
__decorate([
    SnowProperty,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SnowManager.prototype, "color", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "minOpacity", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "maxOpacity", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "minSize", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "maxSize", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "rotation", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "speed", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "stop", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "types", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "width", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "height", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "wind", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "zIndex", null);
__decorate([
    SnowProperty,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SnowManager.prototype, "autoResize", null);
let snowManager;
if (!document.currentScript.dataset.hasOwnProperty('noInit'))
    snowManager = SnowManager.fromScriptDataset(document.currentScript);
//# sourceMappingURL=snow.js.map