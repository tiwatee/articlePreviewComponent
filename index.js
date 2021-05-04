var afterShare = document.getElementById("afterShare")
var beforeShare = document.getElementById("beforeShare")
var before = document.getElementById("before")
var after = document.getElementById("after")
var Icon = document.getElementById("iShare")

if ((before.style.display=="") && (after.style.display == "")){
    before.style.display="grid"
    after.style.display="none"
}


beforeShare.addEventListener("click",function(){
    if ((window.innerWidth >= 1200) && (window.innerWidth > window.innerHeight)){
        if (after.style.display=="none"){
            before.style.display="grid"
            after.style.display="grid"
            Icon.style.backgroundColor="hsl(214, 17%, 51%)"
            Icon.style.color="hsl(210, 46%, 95%)"
            console.log("1 after is displayed")
            console.log(Icon.style.backgroundColor)
        }
        else {
            before.style.display="grid"
            after.style.display="none"
            console.log("2 after is hidden")
            Icon.style.backgroundColor="hsl(210, 46%, 95%)"
            Icon.style.color="hsl(214, 17%, 51%)"
        }
    }
    else {
        before.style.display="none";
        after.style.display="grid";
    }
})


afterShare.addEventListener("click", function(){
    after.style.display="none";
    before.style.display="grid";
    Icon.style.backgroundColor="hsl(210, 46%, 95%)"
    Icon.style.color="hsl(214, 17%, 51%)"
})

