
type cmplx_t = number[];

function cmplx_sum(a: cmplx_t, b: cmplx_t): cmplx_t {
    let rt: cmplx_t = [];

    rt[0] = a[0] + b[0];
    rt[1] = a[1] + b[1];

    return rt;
 }

 function cmplx_sub(a: cmplx_t, b: cmplx_t): cmplx_t {
    let rt: cmplx_t = [];

    rt[0] = a[0] - b[0];
    rt[1] = a[1] - b[1];

    return rt;
 }

 function cmplx_mult(a: cmplx_t, b: cmplx_t): cmplx_t {
     let rt: cmplx_t = [];

     rt[0] = a[0]*b[0] - a[1]*b[1];
     rt[1] = a[0]*b[1] + a[1]*b[0];

     return rt;
 }

 function cmplx_div(a: cmplx_t, b: cmplx_t): cmplx_t {
    let rt: cmplx_t = [];

    rt[0] = (a[0]*b[0] + a[1]*b[1]) / (b[0]*b[0] + b[1]*b[1]);
    rt[1] = (a[1]*b[0] - a[0]*b[1]) / (b[0]*b[0] + b[1]*b[1]);

    return rt;
}

function cmplx_scale(a: cmplx_t, k: number): cmplx_t {
    let rt: cmplx_t = [];

    rt[0] = a[0]*k;
    rt[1] = a[1]*k;

    return rt;
}

