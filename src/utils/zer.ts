const A = "\u200b"
const B = "\u200c"
const C = "\u200d"
const D = "\u200e"

export function encode(str: string): string {
    const encoded = new TextEncoder().encode(str)
    return Array
        .from(encoded)
        .map(i => i.toString(4).padStart(4, "0"))
        .join("")
        .replaceAll("0", A)
        .replaceAll("1", B)
        .replaceAll("2", C)
        .replaceAll("3", D)
}

export function decode(str: string): string {
    str = str
        .replace(/[^\u200b\u200c\u200d\u200e]/g, "")
        .replaceAll(A, "0")
        .replaceAll(B, "1")
        .replaceAll(C, "2")
        .replaceAll(D, "3")
    const x = str.match(/(....)/g)!.map(i => parseInt(i, 4))
    const buffer = new Uint8Array(x)
    return new TextDecoder().decode(buffer.buffer)
}