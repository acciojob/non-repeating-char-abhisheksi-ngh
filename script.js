function firstNonRepeatedChar(str) {
 // Write your code here
 let fre={};
 for(let c of str)
 {
  fre[c]=(fre[c]||0)+1;
 }
 for(let ch of str){
  if(fre[ch]===1){
   return ch;
  }
 }
 return null;
 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
