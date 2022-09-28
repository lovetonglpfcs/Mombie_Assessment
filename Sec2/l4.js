function convertToRoman(num){
    let res = "";
    let number = num;
    while(true){
        if(5000>=number&&number>=4000){
            number-=4000;
            res+="MV̅";
        }else if(number>=5000){
            number-=5000;
            res+="V̅";
        }else if(1000>=number&&number>=900){
            number-=900;
            res+="CM";
        }else if(number>=1000){
            number-=1000;
            res+="M";
        }else if(500>=number&&number>=400){
            number-=400;
            res+="CD";
        }else if(number>=500){
            number-=500;
            res+="D";
        }else if(100>=number&&number>=90){
            number-=90;
            res+="XC";
        }else if(number>=100){
            number-=100;
            res+="C";
        }else if(50>=number&&number>=40){
            number-=40;
            res+="XL";
        }else if(number>=50){
            number-=50;
            res+="L";
        }else if(10>=number&&number>=9){
            number-=9;
            res+="IX";
        }else if(number>=10){
            number-=10;
            res+="X";
        }else if(5>=number&&number>=4){
            number-=4;
            res+="IV";
        }else if(number>=5){
            number-=5;
            res+="V";
        }else if(number>=1){
            number-=1;
            res+="I";
        }else{
            break;
        }

    }
    return res;
}

console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(99));
console.log(convertToRoman(501));
console.log(convertToRoman(4999));