function inRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
}

export function clamp(value: number, min: number, max: number): number {
    if (inRange(value, min, max)) {
        return value;
    } else if (value < min || Number.isNaN(value)) {
        return min;
    } else {
        return max;
    }
}
