const noteArr=["D","R","M","F","S","L","T"]
const inputEle=document.querySelector('input')
const button=document.querySelector('button')
const output=document.querySelector('.output')
button.addEventListener("click",()=>{
    output.innerHTML=""
    const input=inputEle.value
    let inputArr=input.split("")
    for(let i=0;i<7;i++){
    inputArr.forEach((ele,j)=>{
        if(noteArr.includes(ele)){
            inputArr[j]=noteArr[(noteArr.indexOf(ele)+1)%noteArr.length]
        }
    })
    output.innerHTML+=inputArr.join("")+'<br><br>'
}
})
