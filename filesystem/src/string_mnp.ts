
export function removePunctuation(str: string): string {
    return str.replace(/[/.,!?;]*/g, "");
}

export function splitBySpace(str: string): string[] {
    return str.split(" ");
}