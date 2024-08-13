var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
    for(let i=1;i<10;i++){
        for(let j=a;j<b+1;j++){

        process.stdout.write(j+' * '+i+' = '+(j*i)+'  ');

    }
    console.log();

}