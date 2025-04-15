const input = document.querySelector("#input-box");
const listItem = document.querySelector("#list-container");


function addTask() {
    const yemitsafewNeger = input.value.trim();
    
    if (yemitsafewNeger !== "") {
        const yemifeterewlist = document.createElement("li");
        yemifeterewlist.classList.add("list");
        const delBtn = document.createElement("h3");
        delBtn.textContent = "❌";
        delBtn.classList.add("del-btn");
        delBtn.style.justifyContent = "flexEnd";
        delBtn.addEventListener("click", function() {
            listItem.removeChild(yemifeterewlist);
            
        });
        yemifeterewlist.textContent = yemitsafewNeger;
        yemifeterewlist.addEventListener("click", function () {
            yemifeterewlist.classList.toggle("checked");
            
        });
        listItem.appendChild(yemifeterewlist);
        yemifeterewlist.appendChild(delBtn);
        input.value = "";
        
    }
};

function saveData() {
    localStorage.setItem("data", listItem.innerHTML)
}
function showTask() {
    listItem.innerHTML = localStorage.getItem("data"); 
}
showTask();


