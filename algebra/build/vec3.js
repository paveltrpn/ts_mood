"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vec3Sub = exports.vec3Sum = exports.vec3Dot = exports.vec3Invert = exports.vec3Scale = exports.vec3Normalize = exports.vec3Cross = exports.vec3Set = exports.vec3 = void 0;
class vec3 {
    constructor(x, y, z) {
        this.order = 3;
        this.data = new Float32Array(3);
        this.data[0] = x || 0.0;
        this.data[1] = y || 0.0;
        this.data[2] = z || 0.0;
    }
    lenght() {
        return Math.sqrt(this.data[0] * this.data[0] +
            this.data[1] * this.data[1] +
            this.data[2] * this.data[2]);
    }
    normalize() {
        let len;
        len = this.lenght();
        if (len != 0.0) {
            this.data[0] = this.data[0] / len;
            this.data[1] = this.data[1] / len;
            this.data[2] = this.data[2] / len;
        }
    }
}
exports.vec3 = vec3;
function vec3Set(x, y, z) {
    let rt = new vec3;
    rt.data[0] = x;
    rt.data[1] = y;
    rt.data[2] = z;
    return rt;
}
exports.vec3Set = vec3Set;
function vec3Cross(a, b) {
    let rt = new vec3();
    rt.data[0] = a.data[1] * b.data[2] - a.data[2] * b.data[1];
    rt.data[1] = a.data[2] * b.data[0] - a.data[0] * b.data[2];
    rt.data[2] = a.data[0] * b.data[1] - a.data[1] * b.data[0];
    return rt;
}
exports.vec3Cross = vec3Cross;
function vec3Normalize(v) {
    let rt = new vec3();
    let len;
    len = v.lenght();
    if (len > Number.EPSILON) {
        rt.data[0] = v.data[0] / len;
        rt.data[1] = v.data[1] / len;
        rt.data[2] = v.data[2] / len;
    }
    return rt;
}
exports.vec3Normalize = vec3Normalize;
function vec3Scale(v, scale) {
    let rt = new vec3();
    rt.data[0] = v.data[0] * scale;
    rt.data[1] = v.data[1] * scale;
    rt.data[2] = v.data[2] * scale;
    return rt;
}
exports.vec3Scale = vec3Scale;
function vec3Invert(v) {
    let rt = new vec3;
    rt.data[0] = -v.data[0];
    rt.data[1] = -v.data[1];
    rt.data[2] = -v.data[2];
    return rt;
}
exports.vec3Invert = vec3Invert;
function vec3Dot(a, b) {
    return a.data[0] * b.data[0] + a.data[1] * b.data[1] + a.data[2] * b.data[2];
}
exports.vec3Dot = vec3Dot;
function vec3Sum(a, b) {
    let rt = new vec3;
    rt.data[0] = a.data[0] + b.data[0];
    rt.data[1] = a.data[1] + b.data[1];
    rt.data[2] = a.data[2] + b.data[2];
    return rt;
}
exports.vec3Sum = vec3Sum;
function vec3Sub(a, b) {
    let rt = new vec3;
    rt.data[0] = a.data[0] - b.data[0];
    rt.data[1] = a.data[1] - b.data[1];
    rt.data[2] = a.data[2] - b.data[2];
    return rt;
}
exports.vec3Sub = vec3Sub;
