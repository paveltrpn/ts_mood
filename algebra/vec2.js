function vec2_sum(a, b) {
    var rt = [];
    rt[0] = a[0] + b[0];
    rt[1] = a[1] + b[1];
    return rt;
}
function vec2_sub(a, b) {
    var rt = [0, 0];
    rt[0] = a[0] - b[0];
    rt[1] = a[1] - b[1];
    return rt;
}
function vec2_dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
function vec2_scale(a, factor) {
    var rt = [0.0, 0.0];
    rt[0] = a[0] * factor;
    rt[1] = a[1] * factor;
    return rt;
}
//
// TEST SECTION 
//
function test_vec2_sum() {
    var a = [];
    var b = [];
    var rt = [];
    a[0] = Number(document.getElementById("vec2sumX1in").value);
    a[1] = Number(document.getElementById("vec2sumY1in").value);
    b[0] = Number(document.getElementById("vec2sumX2in").value);
    b[1] = Number(document.getElementById("vec2sumY2in").value);
    rt = vec2_sum(a, b);
    document.getElementById("vec2sumXout").value = rt[0].toString();
    document.getElementById("vec2sumYout").value = rt[1].toString();
}
function test_vec2_sub() {
    var a = [];
    var b = [];
    var rt = [];
    a[0] = Number(document.getElementById("vec2subX1in").value);
    a[1] = Number(document.getElementById("vec2subY1in").value);
    b[0] = Number(document.getElementById("vec2subX2in").value);
    b[1] = Number(document.getElementById("vec2subY2in").value);
    rt = vec2_sub(a, b);
    document.getElementById("vec2subXout").value = rt[0].toString();
    document.getElementById("vec2subYout").value = rt[1].toString();
}
function test_vec2_dot() {
    var a = [];
    var b = [];
    var rt;
    a[0] = Number(document.getElementById("vec2dotX1in").value);
    a[1] = Number(document.getElementById("vec2dotY1in").value);
    b[0] = Number(document.getElementById("vec2dotX2in").value);
    b[1] = Number(document.getElementById("vec2dotY2in").value);
    rt = vec2_dot(a, b);
    document.getElementById("vec2dotout").value = rt.toString();
}
function test_vec2_scale() {
    var a = [];
    var factor;
    var rt = [];
    a[0] = Number(document.getElementById("vec2scaleX1in").value);
    a[1] = Number(document.getElementById("vec2scaleY1in").value);
    factor = Number(document.getElementById("vec2scaleX2in").value);
    rt = vec2_scale(a, factor);
    document.getElementById("vec2scaleXout").value = rt[0].toString();
    document.getElementById("vec2scaleYout").value = rt[1].toString();
}
