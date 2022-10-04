
export function randomString(){
    for(var a = '', b = 36; a.length < 12;) a += (Math.random() * b | 0).toString(b)
    return a
}
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}