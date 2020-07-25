export interface RGBColor {
    r: number;
    g: number;
    b: number;
}

export type CMYKColor = number[];

type RGBConverter = (component: number, factor: number) => number;


const newShadeComponent = (component: number, factor: number): number =>
    Math.round(component * (1 - factor));

const newTintComponent = (component: number, factor: number): number =>
    Math.round(component + (255 - component) * factor);


function getColor(color: RGBColor, factor: number, converter: RGBConverter): RGBColor {
    const newColor = Object.assign({}, color);

    Object.keys(newColor).forEach(key => newColor[key] = Math.round(converter(newColor[key], factor)));

    return newColor;
}

export function getShade(color: RGBColor, shadeFactor: number): RGBColor {
    return getColor(color, shadeFactor, newShadeComponent);
}

export function getTint(color: RGBColor, tintFactor: number): RGBColor {
    return getColor(color, tintFactor, newTintComponent);
}

export function isColorDark(color: RGBColor): boolean {
    return (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255 < 0.5;
}

