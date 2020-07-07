
type vec2_t = Array<number>;

function vec2_sum(a: vec2_t, b: vec2_t): vec2_t {
    let rt: vec2_t = [];

    rt[0] = a[0] + b[0];
    rt[1] = a[1] + b[1];

    return rt;
}

function vec2_sub(a: vec2_t, b: vec2_t): vec2_t {
    let rt: vec2_t = [0, 0];

    rt[0] = a[0] - b[0];
    rt[1] = a[1] - b[1];

    return rt;
}

function vec2_dot(a: vec2_t, b: vec2_t): number {
    return a[0]*b[0] + a[1]*b[1];
}

function vec2_scale(a: vec2_t, factor: number): vec2_t {
    let rt: vec2_t = [0.0, 0.0];

    rt[0] = a[0] * factor;
    rt[1] = a[1] * factor;

    return rt;
}

//
// TEST SECTION 
//

function test_vec2_sum() {
    let a: vec2_t = [];
    let b: vec2_t = [];
    let rt: vec2_t = [];
    
    a[0] = Number((<HTMLInputElement>document.getElementById("vec2sumX1in")).value);
    a[1] = Number((<HTMLInputElement>document.getElementById("vec2sumY1in")).value);
    b[0] = Number((<HTMLInputElement>document.getElementById("vec2sumX2in")).value);
    b[1] = Number((<HTMLInputElement>document.getElementById("vec2sumY2in")).value);
       
    rt = vec2_sum(a, b);

    (<HTMLInputElement>document.getElementById("vec2sumXout")).value = rt[0].toString();
    (<HTMLInputElement>document.getElementById("vec2sumYout")).value = rt[1].toString();
}

function test_vec2_sub() {
    let a: vec2_t = [];
    let b: vec2_t = [];
    let rt: vec2_t = [];
    
    a[0] = Number((<HTMLInputElement>document.getElementById("vec2subX1in")).value);
    a[1] = Number((<HTMLInputElement>document.getElementById("vec2subY1in")).value);
    b[0] = Number((<HTMLInputElement>document.getElementById("vec2subX2in")).value);
    b[1] = Number((<HTMLInputElement>document.getElementById("vec2subY2in")).value);
       
    rt = vec2_sub(a, b);

    (<HTMLInputElement>document.getElementById("vec2subXout")).value = rt[0].toString();
    (<HTMLInputElement>document.getElementById("vec2subYout")).value = rt[1].toString();
}

function test_vec2_dot() {
    let a: vec2_t = [];
    let b: vec2_t = [];
    let rt: number;
    
    a[0] = Number((<HTMLInputElement>document.getElementById("vec2dotX1in")).value);
    a[1] = Number((<HTMLInputElement>document.getElementById("vec2dotY1in")).value);
    b[0] = Number((<HTMLInputElement>document.getElementById("vec2dotX2in")).value);
    b[1] = Number((<HTMLInputElement>document.getElementById("vec2dotY2in")).value);
       
    rt = vec2_dot(a, b);

    (<HTMLInputElement>document.getElementById("vec2dotout")).value = rt.toString();
}

function test_vec2_scale() {
    let a: vec2_t = [];
    let factor: number;
    let rt: vec2_t = [];
    
    a[0] = Number((<HTMLInputElement>document.getElementById("vec2scaleX1in")).value);
    a[1] = Number((<HTMLInputElement>document.getElementById("vec2scaleY1in")).value);
    factor = Number((<HTMLInputElement>document.getElementById("vec2scaleX2in")).value);
       
    rt = vec2_scale(a, factor);

    (<HTMLInputElement>document.getElementById("vec2scaleXout")).value = rt[0].toString();
    (<HTMLInputElement>document.getElementById("vec2scaleYout")).value = rt[1].toString();
}

