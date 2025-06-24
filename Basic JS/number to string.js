let num = parseInt(123);

let str="";
let digit=0;

while(num>0){

    digit=num%10;
    num=Math.floor(num/10);

    if(digit===0){
        str='0'+str;
    }
    else if(digit==1){
        str='1'+str;
    }
    else if(digit==2){
        str='2'+str;
    }
    else if(digit==3){
        str='3'+str;
    }
    else if(digit==4){
        str='4'+str;
    }
    else if(digit==5){
        str='5'+str;
    }
    else if(digit==6){
        str='6'+str;
    }
    else if(digit==7){
        str='7'+str;
    }
    else if(digit==8){
        str='8'+str;
    }
    else if(digit==9){
        str='9'+str;
    }

}
console.log(str);