import { RGBColor } from "./colorUtils";
import { CMYKColor } from "./colorUtils"

export function RGBtoCMYK(color: RGBColor): CMYKColor {
    const convertedRGB = [color.r, color.g, color.b].map(value => value / 255)
    const K = 1 - Math.max(...convertedRGB)
    const C = (1 - convertedRGB[0] - K) / (1 - K)
    const M = (1 - convertedRGB[1] - K) / (1 - K)
    const Y = (1 - convertedRGB[2] - K) / (1 - K)

    return [C, M, Y, K].map(item => Number.isNaN(item) ? 0 : item)
}

export function RGBtoHex(color: RGBColor): string {
    return [color.r, color.g, color.b].reduce((string, component) =>
        string.concat(Math
            .round(component)
            .toString(16)
            .padStart(2, "0")
        ), "#")
}

export function CMYKtoString(color: CMYKColor): string {
    return color.map(item => item.toFixed(2)).join(",")
}

export function RGBtoString(color: RGBColor): string {
    return `rgb(${color.r}, ${color.g}, ${color.b})`
}
