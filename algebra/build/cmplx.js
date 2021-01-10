"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmplxScale = exports.cmplxDiv = exports.cmplxMult = exports.cmplxSub = exports.cmplxSum = exports.cmplx = void 0;
class cmplx {
    constructor(r, i) {
        this.order = 2;
        this.data = new Float32Array(2);
        this.data[0] = r || 0.0;
        this.data[1] = i || 0.0;
    }
}
exports.cmplx = cmplx;
function cmplxSum(a, b) {
    let rt = new cmplx;
    rt.data[0] = a.data[0] + b.data[0];
    rt.data[1] = a.data[1] + b.data[1];
    return rt;
}
exports.cmplxSum = cmplxSum;
function cmplxSub(a, b) {
    let rt = new cmplx;
    rt.data[0] = a.data[0] - b.data[0];
    rt.data[1] = a.data[1] - b.data[1];
    return rt;
}
exports.cmplxSub = cmplxSub;
function cmplxMult(a, b) {
    let rt = new cmplx;
    rt.data[0] = a.data[0] * b.data[0] - a.data[1] * b.data[1];
    rt.data[1] = a.data[0] * b.data[1] + a.data[1] * b.data[0];
    return rt;
}
exports.cmplxMult = cmplxMult;
function cmplxDiv(a, b) {
    let rt = new cmplx;
    rt.data[0] = (a.data[0] * b.data[0] + a.data[1] * b.data[1]) / (b.data[0] * b.data[0] + b.data[1] * b.data[1]);
    rt.data[1] = (a.data[1] * b.data[0] - a.data[0] * b.data[1]) / (b.data[0] * b.data[0] + b.data[1] * b.data[1]);
    return rt;
}
exports.cmplxDiv = cmplxDiv;
function cmplxScale(a, k) {
    let rt = new cmplx;
    rt.data[0] = a.data[0] * k;
    rt.data[1] = a.data[1] * k;
    return rt;
}
exports.cmplxScale = cmplxScale;
