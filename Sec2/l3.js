function range(){
    let res = [];
    let max = arguments[1];
    let min = arguments[0];
    if(arguments[0]>arguments[1]){
        max = arguments[0];
        min = arguments[1];
    }
    if(arguments.length==3){
        if(arguments[2]<0){
            temp = min;
            min = max;
            max = temp;
            for(i=min;i>=max;i+=arguments[2]){
                res.push(i);
                }
        }else{
            for(i=min;i<=max;i+=arguments[2]){
            res.push(i);
            }
        }

    }else{
        for(i=min;i<=max;i++){
            res.push(i);
        }
    }
    return res;
}

function sum(arr){
    let res = 0;
    for(i=0;i<arr.length;i++){
        res+=arr[i];
    }
    return res;
}

console.log(range(1,10));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
