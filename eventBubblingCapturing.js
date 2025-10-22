document.querySelector("#grandParent")
    .addEventListener("click" , () => {
        console.log("grandParent Called")   
    })

document.querySelector("#parent")
.addEventListener("click" , () => {
    console.log("parent Called")   
},true)

document.querySelector("#child")
.addEventListener("click" , () => {
    console.log("child Called")   
}) 