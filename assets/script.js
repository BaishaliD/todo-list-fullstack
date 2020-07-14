const checkbox = document.querySelectorAll('.check-button');
const category = document.querySelectorAll('.todo-category');
const state = document.querySelectorAll('.check-button');


//fetching existing tasks from the database and rendering them

for (let item of category) {
    
    if(item.innerText === 'None')
        item.style.display = 'none';
    if (item.innerText === "Personal")
        item.style.backgroundColor = "#9ab39a";
    if (item.innerText === "Work")
        item.style.backgroundColor = "#b3e6b3";
    if (item.innerText === "School")
        item.style.backgroundColor = "#81a390";
    if (item.innerText === "Groceries")
        item.style.backgroundColor = "#94d199";
    if (item.innerText === "Cleaning")
        item.style.backgroundColor = "#79ba96";
    if (item.innerText === "Others")
        item.style.backgroundColor = "#59918e";
}

for (let item of state){
    
    if(item.getAttribute('state')==="true"){
        item.innerHTML = '<i class="fas fa-check-square"></i>';
        item.parentElement.classList.add('checked');
        item.parentElement.children[1].children[0].style.textDecoration = "line-through";
    }
}

if(category.length!=0){
    document.querySelector('.no-task-added').style.display = "none";
}
    

//clicking on checkbox

for(let item of checkbox){

    item.addEventListener('click', changeState);

    function changeState(event){
        
        const id = event.target.getAttribute('id');
        const state = event.target.getAttribute('state');

        if(state==="false"){
            location.href = '/update-task/?id='+id+'&state=true';
        }
        else{
            location.href = '/update-task/?id='+id+'&state=false';
        }
    }
}























