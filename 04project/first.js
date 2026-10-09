const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income=document.querySelector("#income");
    const amount=parseInt(income.value);
    const result=document.querySelector(".result-box h2");

    if (income.value.trim() === "" || !Number.isFinite(amount) || amount < 0) {
        result.textContent = "Enter a valid income";
        return;
    }

    let totaltax=0;
    if(amount<=1200000)
        totaltax=0;
    else if(amount<=1600000)
        totaltax=(amount-1200000)*0.15;
    else if(amount<=2000000)
        totaltax=(amount-1600000)*0.20+60000;
    else if(amount<=2400000)
        totaltax=(amount-2000000)*0.25+60000+80000;
    else
        totaltax=(amount-2400000)*0.30+60000+80000+100000;

    result.textContent = totaltax.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    });
    form.reset();
})