let noteArr=["D","R","M","F","S","L","T"]
let inputEle=document.querySelector('input')
let button=document.querySelector('button')
let output=document.querySelector('.output')
button.addEventListener("click",()=>{
    output.innerHTML=""
    let input=inputEle.value
    let inputArr=input.split("")
    for(let i=0;i<7;i++){
    inputArr.forEach((ele,j)=>{
        if(noteArr.includes(ele)){
            if(inputArr[j]=="T"){
            inputArr[j+1]=parseInt(inputArr[j+1])+1
            }
            inputArr[j]=noteArr[(noteArr.indexOf(ele)+1)%noteArr.length]
        }
    })
    output.innerHTML+=inputArr.join("")+'<br>'
}
})
