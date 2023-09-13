const linkButton = document.querySelectorAll(".btn-custom");
const link = document.querySelectorAll(".btn-custom a");
const length = linkButton.length;

for(let i = 0; i < length;i++){
    linkButton[i].addEventListener("click",function(){
        link[i].click();
    })
}


const context = document.querySelector(".about-us");
const buttonToggle = document.querySelector(".wide-button");
const litButton = document.querySelector(".navbutton");

let indicator;


buttonToggle.addEventListener("click",function(){
    if(indicator === 1){
        context.style.display="none";
        indicator = 0;
    }else{
        context.style.display="block";
        indicator = 1;
    }
})

litButton.addEventListener("click",function(){
    context.style.display="block";
    indicator = 1;
});



