/*
* hrenpack-theme-style 3.1.1
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/

function SnowProperty(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    if (descriptor.get) {
        descriptor.get = function() {
            const instance = this as any;
            if (instance.snow) {
                return instance.snow.params[propertyKey as keyof SnowConfig];
           }
            return null;
       };
    }

    if (descriptor.get) {
        descriptor.set = function(value: any) {
            const instance = this as any;
            if (instance.snow) {
                instance.snow.params[propertyKey as keyof SnowConfig] = value;
                return;
           }
            throw new Error(`Cannot set ${String(propertyKey)} - snow instance destroyed`);
       };
    }

    return descriptor;
}


class SnowManager {
    snow?: Snowflakes | null;
    isActive?: boolean;

    constructor(options: SnowOptions = {}) {
        this.isActive = true;
        this.snow = new Snowflakes(this.initConfig(options));
        this.setupVisibility();
    }

    protected initConfig(config: SnowOptions): SnowConfig {
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

    protected setupVisibility() {
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

    get container(): Optional<HTMLElement> {
        return this.snow?.container ?? null;
    }

    set container(container: HTMLElement) {
        if (this.snow) {
            this.snow.container = container;
            return;
       }
        throw new Error("Unable to set container - SnowManager is destroyed");
    }

    // count
    @SnowProperty
    get count(): Optional<number> {return null;}
    set count(value: Optional<number>) {}

    // color
    @SnowProperty
    get color(): string {return '';}
    set color(value: string) {}

    // minOpacity
    @SnowProperty
    get minOpacity(): Optional<number> {return null;}
    set minOpacity(value: Optional<number>) {}

    // maxOpacity
    @SnowProperty
    get maxOpacity(): Optional<number> {return null;}
    set maxOpacity(value: Optional<number>) {}

    // minSize
    @SnowProperty
    get minSize(): Optional<number> {return null;}
    set minSize(value: Optional<number>) {}

    // maxSize
    @SnowProperty
    get maxSize(): Optional<number> {return null;}
    set maxSize(value: Optional<number>) {}

    // rotation
    @SnowProperty
    get rotation(): Optional<boolean> {return null;}
    set rotation(value: Optional<boolean>) {}

    // speed
    @SnowProperty
    get speed(): Optional<number> {return null;}
    set speed(value: Optional<number>) {}

    // stop
    @SnowProperty
    get stop(): Optional<boolean> {return null;}
    set stop(value: Optional<boolean>) {}

    // types
    @SnowProperty
    get types(): Optional<number> {return null;}
    set types(value: Optional<number>) {}

    // width
    @SnowProperty
    get width(): Nullable<number> {return null;}
    set width(value: Nullable<number>) {}

    // height
    @SnowProperty
    get height(): Nullable<number> {return null;}
    set height(value: Nullable<number>) {}

    // wind
    @SnowProperty
    get wind(): Optional<boolean> {return null;}
    set wind(value: Optional<boolean>) {}

    // zIndex
    @SnowProperty
    get zIndex(): Optional<number> {return null;}
    set zIndex(value: Optional<number>) {}

    // autoResize
    @SnowProperty
    get autoResize(): Optional<boolean> {return null;}
    set autoResize(value: Optional<boolean>) {}
}

let snowManager: SnowManager;

document.addEventListener('DOMContentLoaded', () => {
    snowManager = new SnowManager({
        color: '#abcdef',
        zIndex: 50,
        count: 400,
        minOpacity: 0.4,
        maxOpacity: 0.7,
        speed: 3
    });
    setTimeout(() => {snowManager.speed = 1}, 3000);
});