let purchase = document.getElementById("purchase")
let error = document.getElementById("error")

purchase.addEventListener("click", function(){
    error.textContent = "Something went wrong, please try again"
})