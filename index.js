//functional Buttons
let resultBtn=document.getElementById("result");
let question=document.getElementById("question");
let inArea=document.getElementById("inputArea");
let generateBtn=document.getElementById("generate");
let submitBtn=document.getElementById("submit");
let sum=0;
let inputValue=0;

//buttons of numpad;
let oneBtn=document.getElementById("one");
let twoBtn=document.getElementById("two");
let threeBtn=document.getElementById("three");
let fourBtn=document.getElementById("four");
let fiveBtn=document.getElementById("five");
let sixBtn=document.getElementById("six");
let sevenBtn=document.getElementById("seven");
let eightBtn=document.getElementById("eight");
let nineBtn=document.getElementById("nine");
let zeroBtn=document.getElementById("zero");
let backSpaceBtn=document.getElementById("backspace");

//

generateBtn.addEventListener('click',()=>{
    inArea.value="";
    resultBtn.style.backgroundColor=" rgb(157, 158, 150)"
    resultBtn.innerText="Result";
    const min=0;
    const max=100;
    let a=Math.floor(Math.random()*(max-min+1))+min;
    let b=Math.floor(Math.random()*(max-min+1))+min;
    let s=a+b;
    assignSum(s);
    question.innerText=`${a} + ${b}`;

})
function assignSum(s){
    sum=s;
   // console.log(s);
}
submitBtn.addEventListener('click',()=>{
    if(sum==inArea.value){
        resultBtn.innerText="yayy, You got it right";
        inArea.value="";
        resultBtn.style.backgroundColor="#73EC8B";
    
    }
    else if(inArea.value==""){
        resultBtn.innerText="Enter Your Answer";
        
    }
    else{
        resultBtn.innerText=`Oops, Correct Answer: ${sum}`;
        resultBtn.style.backgroundColor="#E82561"; 
    }
})

// making numpad functional 

oneBtn.addEventListener('click',()=>{

})
backSpaceBtn.addEventListener('click',()=>{
    inArea.value=Math.trunc(inArea.value/10);
    if(inArea.value==0){
        inArea.value="";
    }
})
oneBtn.addEventListener('click',()=>{
    updateInputValue(1);
})
twoBtn.addEventListener('click',()=>{
    updateInputValue(2);
})
threeBtn.addEventListener('click',()=>{
    updateInputValue(3);
})
fourBtn.addEventListener('click',()=>{
    updateInputValue(4);
})
fiveBtn.addEventListener('click',()=>{
    updateInputValue(5);
})
sixBtn.addEventListener('click',()=>{
    updateInputValue(6);
})
sevenBtn.addEventListener('click',()=>{
    updateInputValue(7);
})
eightBtn.addEventListener('click',()=>{
    updateInputValue(8);
})
nineBtn.addEventListener('click',()=>{
    updateInputValue(9);
})
zeroBtn.addEventListener('click',()=>{
    updateInputValue(0);
})
function updateInputValue(a){
    
    inArea.value=(inArea.value)*10+a;
}



