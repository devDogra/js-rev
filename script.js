const addInput = document.querySelector("#add-inp"); 
const addBtn = document.getElementById("add-btn"); 
const ul1 = document.querySelector(".one"); 

let items = Array.from(document.querySelectorAll("li")); 

addBtn.addEventListener("click", () => {
    const value = addInput.value; 
    if (!value) return alert("Please enter a value");

    const isDup = items.includes(value)
    if (isDup) return alert("Duplicate");  

    const newLi = document.createElement("li"); 
    newLi.innerHTML = `
        <span>${value}</span>
        <button class="del-btn">DEL</button>
    `

    const delBtn = newLi.querySelector(".del-btn"); 
    delBtn.addEventListener("click", () => {
        items = items.filter(item => item != value); 
        newLi.remove();
    }); 

    // newLi.innerText = value; 

    // const newLiDelBtn = document.createElement("button"); 
    // newLiDelBtn.className = "del-btn";
    // newLiDelBtn.innerText = "DEL"; 
    // newLi.append(newLiDelBtn); 

    items.push(newLi.innerText)

    ul1.append(newLi); 
})

