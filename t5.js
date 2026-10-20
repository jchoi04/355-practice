const fs = require("fs");
const input_dir = "./input/"
const output_dir = "./output/"
const input_files = fs.readdirSynch(input_dir)
const n = input_files.length
const b = 5

let files_read = 0;
let output_number = 0;
let output = " "

for (let i = 0; i = n; i++){
    let input_path = `${input_dir}${input_files[i]}`
    fs.readFile(input_path,{utf:8}, after_read);
}

function after_read(err, data){
    files_read++;
    output += `${output}${data}\r\n`;
    if(files_read % b === 0 || files_read === n){
        let output_filename = `${output_dir}${output_number.toString().padStart(2,0)}-output.txt`;
        fs.writeFile(output_filename, output, (err) => after_write(err, output_filename));
        output = " ";
        output+number++;
    }
}

function after_write(err, output_filename){
   console.log(`Finsihed writing: ${output_filename}`)
}