const form=document.querySelector('form');
const alltask=document.querySelector('#alltask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=input.value.trim();


    if(text=="")
        return ;


    const parent=document.createElement('div');
    parent.style.margintop="20px";
    parent.style.display="flex";
    parent.style.gap="5px";
    const task=document.createElement('span');
    task.textContent=text;
    const deletebutton=document.createElement('button');
    deletebutton.textContent="delete";
    deletebutton.style.width="50px";
   
    const donebutton=document.createElement('button');
    donebutton.textContent="done";
    donebutton.style.width="50px";
   

    parent.append(task,deletebutton,donebutton);
    alltask.append(parent);

    deletebutton.addEventListener('click',(e)=>{
        parent.remove();
    })

    donebutton.addEventListener('click',(e)=>{
        task.style.textDecoration='line-through';
        task.style.backgroundColor='pink';
        task.style.color='red';




    })

    form.reset();


    


})