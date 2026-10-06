const body=document.querySelector('body');
body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circleelement=document.createElement('div');
    circleelement.classList.add('circle');
    circleelement.textContent="viah kb?";

    const color=['red','blue','pink','navy','white','orange'];
    circleelement.style.backgroundColor=color[Math.floor(Math.random()* color.length())];

    circleelement.style.top=`${e.clientY-25}px`;
    circleelement.style.left=`${e.clientX-25}px`;

    body.append(circleelement);
    setTimeout(()=>{
        circleelement.remove();
    },5000);
});