console.log("hello");
var n = 23;

function parimpar(n){
    if (n % 2 == 0){
        return" par";
    }
    else {
        return "impar";
    }

}

let res = parimpar(n);
console.log(res);