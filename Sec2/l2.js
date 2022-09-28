function chessboard(h,w){
    let res = "";
    for(i=0;i<h;i++){
        for(j=0;j<w;j++){
            if(i%2==0){
                if(j%2==0){
                    res+="#";
                }else{
                    res+=" ";
                }
            }else{
                if(j%2==0){
                    res+=" ";
                }else{
                    res+="#";
                }
            }
            
        }
        res+="\n";
    }
    return res;
}
console.log(chessboard(8,8));
console.log(chessboard(2,3));
console.log(chessboard(10,5));
console.log(chessboard(6,6));