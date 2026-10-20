const fs = require("fs");
const n = 5;
const output_dir = "./output";
const data = "Data-1";
let written = 0;


for(let i = 1; i <= n; i++){
    let file = `${i.toString().padStart(2, 0)}-output.txt`;
    let path = `${output_dir}/${file}`;
    fs.writeFile(path, data, (err) => after_write(err, file));

    function after_write(err, file){
        if(err){
            console.error(err);
        }

        console.log(`Finished writing file ${file}`);
        written++;
        if (written >= n){
            console.log("Writing Complete.");
        }
    }
}
