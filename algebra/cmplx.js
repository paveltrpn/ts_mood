function cmplx_sum(a, b) {
    var rt = [];
    rt[0] = a[0] + b[0];
    rt[1] = a[1] + b[1];
    return rt;
}
function cmplx_sub(a, b) {
    var rt = [];
    rt[0] = a[0] - b[0];
    rt[1] = a[1] - b[1];
    return rt;
}
function cmplx_mult(a, b) {
    var rt = [];
    rt[0] = a[0] * b[0] - a[1] * b[1];
    rt[1] = a[0] * b[1] + a[1] * b[0];
    return rt;
}
function cmplx_div(a, b) {
    var rt = [];
    rt[0] = (a[0] * b[0] + a[1] * b[1]) / (b[0] * b[0] + b[1] * b[1]);
    rt[1] = (a[1] * b[0] - a[0] * b[1]) / (b[0] * b[0] + b[1] * b[1]);
    return rt;
}
function cmplx_scale(a, k) {
    var rt = [];
    rt[0] = a[0] * k;
    rt[1] = a[1] * k;
    return rt;
}
