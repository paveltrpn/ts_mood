
function hello_world(print: string) {
    console.log(print);
}

function fib(n: number): number[] {
    let fib: number[] = new Array(n+1);

    fib[0] = 0;
    fib[1] = 1;
    fib[2] = 1;

    for (let i = 3; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

function erato_sieve(n: number): boolean[] {
    let prime: boolean[] = new Array(n+1);
    let j,i: number;

    for(i = 0; i < prime.length; i++) {
        prime[i] = true;
    }

    prime[0] = prime[1] = false;
    
    for (i = 2; i <= n; ++i) {
        if (prime[i]) {
            if ((i * i) <= n) {
                for (j = i*i; j <= n; j += i) {
                    prime[j] = false;
                }
            }
        }
    }
    
    return prime
}

function main() {
    /*
    let sieve: boolean[];
    console.log("erato_sieve");
    sieve = erato_sieve(100);
    for (let i = 0; i < sieve.length - 1; i++) {
        if (sieve[i] == true) {
            console.log(i);
        }
    }
    */
    
    let f: number[];
    console.log("fibonacci");
    f = fib(15);
    for (let i in f) {
        console.log(f[i]);
    }
}

main()

