/*
* hrenpack-theme-style 3.1.1
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack-theme-style/blob/main/LICENSE)
*/

declare function SnowProperty(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class SnowManager {
    snow?: Snowflakes | null;
    isActive?: boolean;
    constructor(options?: SnowOptions);
    protected initConfig(config: SnowOptions): SnowConfig;
    protected setupVisibility(): void;
    pause(): void;
    play(): void;
    toggle(): void;
    destroy(): void;
    get container(): Optional<HTMLElement>;
    set container(container: HTMLElement);
    get count(): Optional<number>;
    set count(value: Optional<number>);
    get color(): string;
    set color(value: string);
    get minOpacity(): Optional<number>;
    set minOpacity(value: Optional<number>);
    get maxOpacity(): Optional<number>;
    set maxOpacity(value: Optional<number>);
    get minSize(): Optional<number>;
    set minSize(value: Optional<number>);
    get maxSize(): Optional<number>;
    set maxSize(value: Optional<number>);
    get rotation(): Optional<boolean>;
    set rotation(value: Optional<boolean>);
    get speed(): Optional<number>;
    set speed(value: Optional<number>);
    get stop(): Optional<boolean>;
    set stop(value: Optional<boolean>);
    get types(): Optional<number>;
    set types(value: Optional<number>);
    get width(): Nullable<number>;
    set width(value: Nullable<number>);
    get height(): Nullable<number>;
    set height(value: Nullable<number>);
    get wind(): Optional<boolean>;
    set wind(value: Optional<boolean>);
    get zIndex(): Optional<number>;
    set zIndex(value: Optional<number>);
    get autoResize(): Optional<boolean>;
    set autoResize(value: Optional<boolean>);
}
declare let snowManager: SnowManager;
//# sourceMappingURL=snow.d.ts.map