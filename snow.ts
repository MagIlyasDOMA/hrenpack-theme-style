/*
* hrenpack-theme-style 3.2.7
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

    if (descriptor.set) {
        descriptor.set = function(value: any) {
            const instance = this as any;
            if (instance.snow) {
                // Пересоздаем snow с новыми параметрами
                const currentParams = instance.snow.params;
                const newParams = {
                    ...currentParams,
                    [propertyKey]: value
                };

                // Уничтожаем старый экземпляр
                instance.snow.destroy();

                // Создаем новый с обновленными параметрами
                instance.snow = new Snowflakes(newParams);

                return;
            }
            throw new Error(`Cannot set ${String(propertyKey)} - snow instance destroyed`);
        };
    }

    return descriptor;
}

function toNumber(input: Nullable<string>, numberType: 'int' | 'float', defaultValue: number): number {
    let output: number;
    if (!input) return defaultValue;
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

/*
 * Класс управления снегопадом
 * Внимание: Изменение параметров через сеттеры приводит к пересозданию
 * экземпляра Snowflakes, что может вызвать кратковременное мерцание
 */
class SnowManager {
    snow?: Snowflakes | null;
    isActive?: boolean;

    constructor(options: SnowOptions = {}) {
        this.isActive = true;
        this.snow = new Snowflakes(this.initConfig(options));
        this.setupVisibility();
    }

    static fromScriptDataset(script: HTMLOrSVGScriptElement) {
        let options: SnowOptions = {}
        if (script) {
            const dataset = script.dataset;
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
            }
        }
        return new SnowManager(options);
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

if (!document.currentScript!.dataset.hasOwnProperty('noInit'))
    snowManager = SnowManager.fromScriptDataset(document.currentScript!);
