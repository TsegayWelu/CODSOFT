document.addEventListener('DOMContentLoaded', function() {
    tasks();
});

async function addtask() {
    const task = document.getElementById('input-box').value;
    if(task===''){
        alert("task name can not be empty");
    }
    else{
    let response = await axios({ method: 'post', url: 'http://localhost:3000/add', data: { task } });
    console.log({ response });
    tasks();
    document.getElementById('input-box').value = '';
    }
}

async function tasks() {
    let response = await axios({ method: 'get', url: 'http://localhost:3000/listtask' });
    let tasks = response.data;
    let dataList = document.querySelector("ul#list-container");
    let htmlContent = '';
    tasks.forEach(task => {
        htmlContent += `<li >` + task.task + `<span onclick=deletetask(${task.id})>X</span></li>`;

    });
    
    dataList.innerHTML = htmlContent;
}

async function deletetask(id) {

    //const deletetask=document.getElementById('input-box').value;
    let response = await axios({ method: 'delete', url: 'http://localhost:3000/delete', data: { id} });
    console.log({ response });
    tasks();
    

}

 async function updatetask() {
    

    const newtask=document.getElementById('newtask').value;
    const currenttask=document.getElementById('currenttask').value;
if(currenttask==='' || newtask===""){
    alert("please type both current task name and the new task name  in the boxes below you want to update. ");
}
else{
    let response = await axios({ method: 'put', url: 'http://localhost:3000/update', data: {newtask,currenttask} });
    console.log({ response });
    tasks();
    document.getElementById('newtask').value = '';
    document.getElementById('currenttask').value = '';
}
} 
 