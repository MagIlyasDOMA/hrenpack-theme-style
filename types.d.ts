declare class Snowflakes {
    constructor(options: any);
    pause(): void;
    play(): void;
    destroy(): void;
    container: HTMLElement;
    params: SnowConfig;
}

interface SnowConfig {
    container: HTMLElement; // Default: document.body
    count: number; // Default: 50
    color: string; // Default: "#5ecdef"
    minOpacity: number; // Default: 0.6
    maxOpacity: number; // Default: 1
    minSize: number; // Default: 10
    maxSize: number; // Default: 25
    rotation: boolean; // Default: true
    speed: number; // Default: 1
    stop: boolean; // Default: false
    types: number; // Default: 6
    width?: number; // Default: width of container
    height?: number; // Default: height of container
    wind: boolean; // Default: true
    zIndex: number; // Default: 9999
    autoResize: boolean; // Default: true
}

type Optional<T> = T | null
type Nullable<T> = T | null | undefined
type SnowOptions = Partial<SnowConfig>
