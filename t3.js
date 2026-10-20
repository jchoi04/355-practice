const fs = require("fs");
const dns = require("dns");
const output_file = "./output.hosts.txt";
const input_file = "./input/domains.txt"
let resolved = 0;


fs.readFile(input_file, {encoding:utf8}, after_read);
function after_read(err, data){
    if(err){
        console.err(err);
    } else{
        let domains = fileData.split('\r\n');
        let results = [];
        for(let i = 0; i < domains.length; i++){
            resolve(i, domains);
        }
    }
}

function resolve(i, domains, results){
dns.resolve(domains[i], after_resolution);
    function after_resolution(err, records){
        if(err){
            console.error("Could not complete", domains);
        } else{
            resolved++;
            results.push(`${records[0]} \t ${domains[i]}`)
            if(resolved == domains.length){
                fs.writeFile(output_file, results.join("\r\n"), () => console.log("Finished Writing"));
            }
        }
    }
}