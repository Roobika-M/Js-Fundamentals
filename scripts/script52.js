const user = {
    name : "peter",
    greet : function(){
        console.log("good morning" + this.name);
    },
    arrow : () => {
        console.log("good morning" + this.name);
    }
}

user.greet(); // no error
user.arrow();  //error


const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log(this);  // refers to the button element
});

button.addEventListener("click", () => {
  console.log(this);  //refers to outer scope (probably window)
});
