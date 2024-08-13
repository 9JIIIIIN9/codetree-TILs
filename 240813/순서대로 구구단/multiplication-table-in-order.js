var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
for(let i=1;i<10;i++){
    process.stdout.write(a+' * '+i+' = '+(a*i)+'  ');
    process.stdout.write(b+' * '+i+' = ' +(b*i)+ '\n');

}