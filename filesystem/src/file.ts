
const fs = require("fs");

export class fread {
    public fname: string;
    private fDescriptor: number;

    constructor(name: string) {
        this.fDescriptor = fs.readFileSync(name, 'r'); 
    }

    printFileContent() {
        console.log(this.fDescriptor)
    }
}