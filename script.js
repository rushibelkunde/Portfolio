

var skill = document.getElementsByClassName("skill");





document.addEventListener("mouseover",(e)=>{

    
    if(e.target.className=="skill"){
        e.target.style="animation-name: animation;animation-duration:4s;animation-iteration-count: normal;animation-direction: alternate-reverse;"
    }

    setTimeout(()=>{
        e.target.style=""

    },8000)
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            console.log("xyz")
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");


hiddenElements.forEach((el)=>observer.observe(el));