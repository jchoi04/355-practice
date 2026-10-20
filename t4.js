const dns = require("dns");
const zlib = require("zlib");
const fs = require("fs");
const input_file = "./input/domain.deflated";
const output_file = "./output/ip_address.txt";


fs.readFile(input_file, {encoding:null}, after_read);
    function after_read(err, compressed_buffer){
        zlib.inflate(compressed_buffer, after_decompress);
}

function after_decompress(err, buffer){
    const domain = buffer.toString("utf8");
    dns.resolve(domain, (err, records) => after_resolution(err, records, domain));
}

function after_resolution(err, records, domain){
    let results = `${records[0]} \t ${domain}`;
    fs.writeFile(output_file, results, () => {});
}