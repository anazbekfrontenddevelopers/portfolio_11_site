// setInterval(function(){
//     window.location;
//     let width=window.screen.width;
//     console.log(width);
// },1000)

// menu responsive
let i=1;
document.getElementById("main_menu_icon").onclick=function(){
    if(i%2==1){
        document.getElementById("hidden_menu").style.visibility="visible";
        document.getElementById("hidden_menu").style.left="0%";
        this.style.transform="rotate(90deg)";
    }
    else{
        document.getElementById("hidden_menu").style.visibility="hidden";
        document.getElementById("hidden_menu").style.left="-40%";
        this.style.transform="rotate(0deg)";
    }
    i++;
}

// slide
let main_img=5;
let margin=20;
window.location(1000);
console.log("salom");
let slide_img=document.querySelectorAll(".slide_img");
for(let j=0;j<slide_img.length;j++){
    slide_img[j].onclick=function(){
        if(j<main_img){
            margin+=640;
            slide_img[0].style.marginLeft=margin+"px";
            slide_img[main_img].style.transform="scale(1)";
            slide_img[main_img].style.zIndex="2";
            slide_img[main_img-1].style.transform="scale(1.3)";
            slide_img[main_img-1].style.zIndex="5";
            main_img--;
        }
        if(main_img<j){
            margin-=640;
            slide_img[0].style.marginLeft=margin+"px";
            slide_img[main_img].style.transform="scale(1)";
            slide_img[main_img].style.zIndex="2";
            slide_img[main_img+1].style.transform="scale(1.3)";
            slide_img[main_img+1].style.zIndex="5";
            main_img++;
        }
        // if(main_img==j){
        //     slide_img[main_img].style.transform="scale(2)";
        // }
    }
} 


