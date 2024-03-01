
let text = document.getElementById("text")

let btn = document.getElementById("btn")

let QR_code = document.getElementById("QR_code")

let box = document.getElementById("box")

let container = document.getElementById("container")


let same_QR=""
btn.addEventListener("click",function()
{
    let input = text.value
    input = input.split(" ").join(" ")
    console.log(input)
    if(input=="")
    {
        text.setAttribute("placeholder","Please enter the text ..")
    }
    else if(input==same_QR)
    {
        alert("Same QR Code ")
    }
    else
    {

        QR_code.innerText="Generating the QR code ..."

        setTimeout(function()
        {
            QR_code.innerHTML=`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}" alt="QR Code">`
        },2000)
        
        box.style.height="435px"
        
        text.value=""
        
        text.setAttribute("placeholder","Enter the text ..")
        same_QR = input
    }
})