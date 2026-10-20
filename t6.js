const fs = require("fs");
const zlib = require("zlib");
const input_dir = "./input/";
const output_dir = "./output/";
const input_files = fs.readdirSync(input_dir);
const n = input_files.length;
const output_file = "./output/secret-message.zip";

const buffers = Array(n);
let decompressed = 0;

for(let i = 0; i < n; i++){
    let input_path = `${input_dir}${input_files[i]}`
    fs.readFile(input_path, {utf: null}, (err, compressed_buffer) => after_read(err, compressed_buffer, i));
}

function after_read(err, compressed_buffer, i){
    zlib.inflate(compressed_buffer, (err, buffer) => after_decompress(err, buffer, i));

}

function after_decompress(err, buffer, i){
    decompressed++;
    buffers[i] = buffer;
    if(decompressed === n){
        fs.writeFile(output_file, Buffer.concat(buffers), () => console.log("Finished Writing File"));
    }
}