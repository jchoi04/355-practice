const fs = require("fs");
const output_dir = "./output";
const n = 6;
const data = "Data-2";
let written = 0;


writeSynch(1);
function writeSynch(i){
    let file = `${i.toString().padStart(2,0)}-output.txt`;
    let path = `${output_dir}/${file}`;
    fs.writeFile(path, data, (err) => after_write(i, file));
}


function after_write(i, file){
    console.log(`Finished writing ${file}`);

    if(i == n){
        console.log("Writing Complete")
    } else{
    writeSynch(i+1);
    }
}