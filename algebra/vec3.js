var _XC = 0;
var _YC = 1;
var _ZC = 2;
function vec3_sum(a, b) {
    var rt = [];
    rt[0] = a[0] + b[0];
    rt[1] = a[1] + b[1];
    rt[2] = a[2] + b[2];
    return rt;
}
function vec3_sub(a, b) {
    var rt = [];
    rt[0] = a[0] - b[0];
    rt[1] = a[1] - b[1];
    rt[2] = a[2] - b[2];
    return rt;
}
function vec3_dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function vec3_scale(a, factor) {
    var rt = [];
    rt[0] = a[0] * factor;
    rt[1] = a[1] * factor;
    rt[2] = a[2] * factor;
    return rt;
}
function vec3_cross(a, b) {
    var rt;
    rt[0] = a[_YC] * b[_ZC] - a[_ZC] * b[_YC];
    rt[1] = a[_ZC] * b[_XC] - a[_XC] * b[_ZC];
    rt[2] = a[_XC] * b[_YC] - a[_YC] * b[_XC];
    return rt;
}
