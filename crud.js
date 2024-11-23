
function addTask(){
 let inputData=document.getElementById("inputData")
 let inputDataValue=inputData.value.trim()

 let allTasksContainer=document.querySelector("#tasks")
 let liTag=document.createElement("li")


 liTag.innerHTML =`${inputDataValue} 
 <button class="edit">EDIT</button> 
 <button class="delete">Delete</button>`

 liTag.style.listStyleType="none"

 allTasksContainer.appendChild(liTag)
 inputData.value=""

let editbtn=liTag.querySelector(".edit")
editbtn.style.backgroundColor = "red"

let delbtn= liTag.querySelector(".delete")
delbtn.style.backgroundColor = "blue"

delbtn.addEventListener("click", () => {
    deleteTask(liTag)
    console.log("df is called");
})


editbtn.addEventListener("click", () => {
    EditTask(liTag)
})


}

function deleteTask(liTag) {
    let a = confirm("are you sure wanna delete the task")
    if (a) {
        liTag.remove()
    }
}


function EditTask(item) {
    let x = prompt("enter the data", item.firstChild.textContent)
    if (x !== null && x.trim() !== "") {
        item.firstChild.textContent = x;
    }
}


