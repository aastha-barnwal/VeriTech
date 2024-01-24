// let inputBx = document.querySelector('#inputBx');
// let list = document.querySelector('#list');
// let storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];



// storedItems.forEach(item => addItem(item));
// inputBx.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//         addItem(this.value);
//         this.value="";
//     }
// });
// let addItem= (inputBx)=>{
//     let listItem = document.createElement("li");
//     listItem.innerHTML=`${inputBx}<i></i>`;
//     listItem.addEventListener("click",function(){
//         this.classList.toggle('done');
//     })
//     listItem.querySelector("i").addEventListener("click",
//     function(){
//         listItem.remove();
//     })
//     list.appendChild(listItem);

// }






let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];

// Declare the addItem function
let addItem = (inputText) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputText}<i></i>`;
    
    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function(){
        let itemToRemove = this.parentNode.textContent.trim();
        storedItems = storedItems.filter(item => item !== itemToRemove);
        localStorage.setItem('todoItems', JSON.stringify(storedItems));
        listItem.remove();
    });
    

    list.appendChild(listItem);
};

// Load items from local storage on page load
storedItems.forEach(item => addItem(item));

inputBx.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        let value = this.value.trim();
        if (value !== "") {
            addItem(value);
            storedItems.push(value);
            localStorage.setItem('todoItems', JSON.stringify(storedItems));
            this.value = "";
        }
    }
});
