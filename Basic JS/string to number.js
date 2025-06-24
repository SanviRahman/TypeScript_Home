let str="123";

let sum=0;

for(let i=0; i<str.length;i++)
{
    sum=sum*10+(str[i]-'0');
}
console.log(sum);
console.log(typeof(sum));