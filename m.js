//getting the total///

var total = document.getElementById("total");
console.log(total)
///plus button///
let plusbtns = document.getElementsByClassName("plus-btn")

for (let btn of plusbtns) {
    btn.addEventListener("click", function () {
        console.log("click")
   ///getting the value of the name attribute
   
        let itemName = btn.getAttribute("name")
        ///getting item price
        let price = document.getElementById(itemName + "_price");
        let quantity = document.getElementById(itemName + "_qqty");
        quantity.innerHTML++;
        total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML)
      

    }

    
    
    )
}


///moins button///
let minusbtns = document.getElementsByClassName("minus-btn")

for (let btn of minusbtns) {
    btn.addEventListener("click", function () {
        console.log("click")
   ///getting the value of the name attribute
   
        let itemName = btn.getAttribute("name")
        ///getting item price
        let price = document.getElementById(itemName + "_price");
        let quantity = document.getElementById(itemName + "_qqty");


        if (quantity.innerHTML >0) {
            quantity.innerHTML--;
            total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML)
        }else {alert ("you cannot decrement further")}
    }
    
    )
}






//heart


let hearts = document.querySelectorAll(".heart")


for (let heart of hearts) {
    
    heart.addEventListener("click", function () {
    
        if (heart.getAttribute("fill") == "red") {
    heart.setAttribute("fill" , "grey")
        } else {
              heart.setAttribute("fill", "red");

}


})
}


let deletes = document.querySelectorAll(".delete-btn");

console.log(deletes);
for (let del of deletes) {
    del.addEventListener("click", function () {
        del.parentElement.parentElement.remove()
      
       
  });
}

