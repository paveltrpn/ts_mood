
function hello_world(print: string) {
    console.log(print);
}

function show_sieve(sieve: boolean[]) {
    let i: number = 0;

    for (i = 0; i < sieve.length - 1; i++) {
        if (sieve[i] == true) {
            console.log(i);
        }
    }
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
    let sieve: boolean[];

    console.log("erato_sieve");
    sieve = erato_sieve(100);
    show_sieve(sieve);
}

main()

