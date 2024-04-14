// const ul2 = document.querySelector(".two");
// const li = ul2.querySelector("li"); 
const addInput = document.querySelector("#add-inp"); 
const addBtn = document.getElementById("add-btn"); 
const ul1 = document.querySelector(".one"); 
// const allItems = Array.from(document.querySelectorAll("li:not(:nth-child(3))")); 

const items = [];
const allPrexistingItems = document.querySelectorAll("li"); 
// items.concat(Array.from(allPrexistingItems)); 
Array.from(allPrexistingItems).forEach(item => items.push(item.innerText)); 
console.log(items); 

// allItems.forEach((li, idx) => {
//     li.style.backgroundColor = "red";
//     li.style.fontSize = "20px"; 
//     li.className = idx;
//     li.classList.add("abc"); 
//     li.classList.contains("abc"); 
//     li.classList.remove("abc"); 
//     li.setAttribute("data-idx", idx);
    
// })

// 1. Listen for Add Btn Clicks X
// 2. When clicked, get input value X
// 3. Create a new list item with that value X
// 4. Add that list item to our list

// N = num of list items 
// M = total num of nodes


addBtn.addEventListener("click", () => {
    const value = addInput.value; 
    if (!value) return alert("Please enter a value");

    // O(N)
    const isDup = items.includes(value)
    if (isDup) return alert("Duplicate");  
    
    // // O(M)
    // // const all = Array.from(document.querySelectorAll("li"));

    // // O(N)
    // const dup = all.find(li => li.innerText == value);
    // // 1000*(M + N)
    // if (dup) return alert("Duplicate");  


    const newLi = document.createElement("li"); 
    newLi.innerText = value; 
    items.push(newLi.innerText)
    ul1.append(newLi); 
})

console.log(addBtn, addInput); 

