let input=document.getElementById("input")
let button=document.getElementById("btn")
let todoList=document.getElementById("todoList")

//local storage - used to store website information in 
//user device  (store like key value)
let todos=[];
window.onload=()=>{
//used to retrieve the data stored in the    
  todos=JSON.parse(localStorage.getItem('todos')) || [] //'todos'-key
// todos - array if we dont have any value in the array , it stored as empty array
    todos.forEach(todo=>display(todo))
//used to display the datas stored in the local storage,  everytime we load the window 
}
button.addEventListener("click",()=>{
    todos.push(input.value)
    display(input.value)
    input.value=""//after entering one data input box is empty
})

function display(uservalue){
    let para=document.createElement("p")
    para.innerText=uservalue
    todoList.appendChild(para)

//local storage            key  , value
    localStorage.setItem('todos',JSON.stringify(todos)) //to store the uservalue
 // array is converted to string and stored in local storage   
  
    para.addEventListener('click',()=>{
    para.style.textDecoration="line-through"
    remove(uservalue)
    }) //used to remove data from the array
    para.addEventListener('dblclick',()=>{
    para.style.textDecoration="line-through"
    remove(uservalue)
    para.remove()  // or todoList.removeChild(para)
    })
}
function remove(uservalue){
    let index=todos.indexOf(uservalue)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos)) 
// when we single click and double click data is also delete from the local storage
//So, we updated array ("when it is deleted,") it is set to the localstorage
}





// let input=document.getElementById("input")
// let button=document.getElementById("btn")
// let todoList=document.getElementById("todoList")

// let todos=[];
// button.addEventListener('click',()=>{
//     todos.push(input.value)
//     display(input.value)
//     input.value=""
// })

// window.onload=()=>{
//     todos= JSON.parse(localStorage.getItem('todos')) || []
//     todos.forEach(todo => display(todo));
// }

// function display(uservalue){
//     let para=document.createElement("p")
//     para.innerHTML=uservalue
//     todoList.appendChild(para)
    
//     localStorage.setItem('todos',JSON.stringify(todos))


//     para.addEventListener('click',()=>{
//         para.style.textDecoration="line-through";
//         remove(uservalue)
//     })
//     para.addEventListener('dblclick',()=>{
//         todoList.removeChild(para)
//         remove(uservalue)
//     })

// }

// function remove(uservalue){
//     let index= todos.indexOf(uservalue)
//     if(index>-1){
//         todos.splice(index,1)
//     }
//     localStorage.setItem('todos',JSON.stringify(todos))
    
// }
// console.log(todos)