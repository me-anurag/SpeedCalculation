let resultBtn=document.getElementById("result");
let question=document.getElementById("question");
let inArea=document.getElementById("inputArea");
let generateBtn=document.getElementById("generate");
let submitBtn=document.getElementById("submit");
let sum=0;
submitBtn.addEventListener('click',()=>{
    let valueEntered=inArea.value;
    if (valueEntered=="hello"){
        resultBtn.innerText="yayy";
    }
})

generateBtn.addEventListener('click',()=>{
    inArea.value="";
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
    
    }
    else if(inArea.value==""){
        resultBtn.innerText="Enter Your Answer";
        
    }
    else{
        resultBtn.innerText=`Oops, Correct Answer: ${sum}`;
    }
})

