"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vec3_js_1 = require("./vec3.js");
const vec2_js_1 = require("./vec2.js");
const cmplx_js_1 = require("./cmplx.js");
function main() {
    let bar_vec3 = new vec3_js_1.vec3(0.4, 0.1, 0.3);
    let bar_cmplx = new cmplx_js_1.cmplx(0, 1);
    let bar_vec2 = new vec2_js_1.vec2(3, 5);
    console.log(bar_vec3.data);
    console.log(bar_vec2.data);
    console.log(bar_cmplx.data);
}
main();
