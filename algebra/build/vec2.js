"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vec2Sub = exports.vec2Sum = exports.vec2Dot = exports.vec2Invert = exports.vec2Scale = exports.vec2Normalize = exports.vec2Set = exports.vec2 = void 0;
class vec2 {
    constructor(x, y) {
        this.order = 2;
        this.data = new Float32Array(2);
        this.data[0] = x || 0.0;
        this.data[1] = y || 0.0;
    }
    lenght() {
        return Math.sqrt(this.data[0] * this.data[0] +
            this.data[1] * this.data[1]);
    }
    normalize() {
        let len;
        len = this.lenght();
        if (len != 0.0) {
            this.data[0] = this.data[0] / len;
            this.data[1] = this.data[1] / len;
        }
    }
}
exports.vec2 = vec2;
function vec2Set(x, y) {
    let rt = new vec2;
    rt.data[0] = x;
    rt.data[1] = y;
    return rt;
}
exports.vec2Set = vec2Set;
function vec2Normalize(v) {
    let rt = new vec2();
    let len;
    len = v.lenght();
    if (len > Number.EPSILON) {
        rt.data[0] = v.data[0] / len;
        rt.data[1] = v.data[1] / len;
    }
    return rt;
}
exports.vec2Normalize = vec2Normalize;
function vec2Scale(v, scale) {
    let rt = new vec2();
    rt.data[0] = v.data[0] * scale;
    rt.data[1] = v.data[1] * scale;
    return rt;
}
exports.vec2Scale = vec2Scale;
function vec2Invert(v) {
    let rt = new vec2;
    rt.data[0] = -v.data[0];
    rt.data[1] = -v.data[1];
    return rt;
}
exports.vec2Invert = vec2Invert;
function vec2Dot(a, b) {
    return a.data[0] * b.data[0] + a.data[1] * b.data[1];
}
exports.vec2Dot = vec2Dot;
function vec2Sum(a, b) {
    let rt = new vec2;
    rt.data[0] = a.data[0] + b.data[0];
    rt.data[1] = a.data[1] + b.data[1];
    return rt;
}
exports.vec2Sum = vec2Sum;
function vec2Sub(a, b) {
    let rt = new vec2;
    rt.data[0] = a.data[0] - b.data[0];
    rt.data[1] = a.data[1] - b.data[1];
    return rt;
}
exports.vec2Sub = vec2Sub;
