var drop=document.getElementById("icon")
var openDrop=()=>{
    let navDown=document.getElementsByClassName("nav-down");
    if(navDown[0].className.indexOf("active")===-1){
        console.log(navDown[0])
        navDown[0].className += ' active';
        console.log(navDown[0])
    }else{
    navDown[0].className=navDown[0].className.split(" ")[0];
    }
}

drop.addEventListener('click',openDrop);
