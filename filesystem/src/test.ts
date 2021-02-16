
import { fread } from "./file.js";

(function main() {
    console.log("main(): fs test.")

    let foo: fread = new fread("assets/raven.txt")

    foo.printFileContent();
})();
