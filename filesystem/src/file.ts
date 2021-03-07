
import * as fs from "fs";
import * as rng from "./range";

export class freadSync {
    public fname: string;
    public fileContent: string;

    constructor(name?: string) {
        if (name) {
            this.fname = name;
            this.fileContent = fs.readFileSync(name,"utf8"); 
        } else {
            this.fname = "unknown file";
            this.fileContent = "empty"; 
        }
        
    }

    printFileStats(name: string) {
        let stats: fs.Stats;

        try {
            stats = fs.statSync (name)
        } catch (err) {
            console.error(err)
        }

        console.log(stats)
    }
}

function removePunctuation(str: string): string {
    return str.replace(/[/.,!?;]*/g, "");
}

function splitBySpace(str: string): string[] {
    return str.split(" ");
}

export function testfreadSync() {
    console.log("main(): fs test.")
    console.log( rng.Range.range(0,20,2));

    // let foo: freadSync = new freadSync();
    // foo.printFileStats("../assets/raven.txt");

    let fileContent = fs.readFileSync("../assets/raven.txt", "utf8")
    let words = splitBySpace(fileContent);

    // for (let i = 0; i < 5; i++) {
        // console.log(words[i])
    // }

    // console.log(removePunctuation(fileContent))
}