function tub(n){x=0;
    if(n==2)
    console.log("tub");
    else{
    for(var i=2;i<n;i++){
        x=n%i;
        if(x==0)
        break;
    }
    if(x!=0)
 console.log("tub");
 else
    console.log("tub emas");}}
var raqam=2;
tub(raqam);