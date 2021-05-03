var afterShare = document.getElementById("afterShare")
var beforeShare = document.getElementById("beforeShare")
var before = document.getElementById("before")
var after = document.getElementById("after")

beforeShare.addEventListener("click",function(){
    before.style.display="none";
    after.style.display="grid";
    console.log(before.style.display)
    console.log(after.style.display)
})
afterShare.addEventListener("click", function(){
    after.style.display="none";
    before.style.display="grid";
})