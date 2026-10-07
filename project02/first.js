const parent=document.getElementById('parent');
const currentcolor=document.getElementById('current-color');
parent.addEventListener('click',(e)=>{

   
    const child=e.target;
    if(!e.target.matches('.color-btn')) return;
     const body=document.querySelector('body');
     body.style.backgroundColor=child.id;
     const selectedColor = child.style.backgroundColor;
     body.style.backgroundColor = selectedColor;

    currentcolor.textContent = `Current color is: ${child.id}`;
    currentcolor.style.color = selectedColor;

    
     
});

