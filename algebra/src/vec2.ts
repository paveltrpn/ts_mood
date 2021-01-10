
export class vec2 {
	data: Float32Array;
	private readonly order: number = 2;

	constructor(x?: number, y?: number) {
        this.data = new Float32Array(2);
        
		this.data[0] = x || 0.0;
		this.data[1] = y || 0.0;
    }
    
    lenght(): number {
		return Math.sqrt(this.data[0]*this.data[0] + 
						 this.data[1]*this.data[1]);
    }
    
    normalize() {
		let len: number;
	
		len = this.lenght();

		if (len != 0.0) {
			this.data[0] = this.data[0] / len;
			this.data[1] = this.data[1] / len;
		}
	}
}

export function vec2Set(x: number, y: number): vec2 {
	let rt = new vec2;

	rt.data[0] = x;
	rt.data[1] = y;

	return rt;
}


export function vec2Normalize(v: vec2): vec2 {
	let rt = new vec2();
	let len: number;
	
	len = v.lenght();

	if (len > Number.EPSILON) {
		rt.data[0] = v.data[0] / len;
		rt.data[1] = v.data[1] / len;
	}

	return rt;
}

export function vec2Scale(v: vec2, scale: number): vec2 {
    let rt: vec2 = new vec2();

	rt.data[0] = v.data[0] * scale;
	rt.data[1] = v.data[1] * scale;

	return rt;
}

export function vec2Invert(v: vec2): vec2 {
    let rt: vec2 = new vec2;

	rt.data[0] = -v.data[0];
	rt.data[1] = -v.data[1];

	return rt;
}

export function vec2Dot(a : vec2, b: vec2): number {
	return a.data[0]*b.data[0] + a.data[1]*b.data[1];
}

export function vec2Sum(a: vec2, b: vec2): vec2 {
    let rt: vec2 = new vec2;

	rt.data[0] = a.data[0] + b.data[0];
	rt.data[1] = a.data[1] + b.data[1];

	return rt;
}

export function vec2Sub(a: vec2, b: vec2): vec2 {
    let rt: vec2 = new vec2;

	rt.data[0] = a.data[0] - b.data[0];
	rt.data[1] = a.data[1] - b.data[1];

	return rt;
}