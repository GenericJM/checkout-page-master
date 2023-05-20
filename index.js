"use Strict"
const counter = document.querySelectorAll(".product__counter");
const productPrice=document.querySelectorAll(".product__price-discount");
const total=document.querySelector(".total__amount");
const shipping=document.querySelector(".shipping__value");
const product__info=document.querySelector("product__info");

total.textContent=shipping.textContent;
let i=0;
for (const count of counter) {
    
    const minus = count.children[0];
    const number = count.children[1];
    const plus = count.children[2];
    let num=Number(number.textContent);
    let totalAmount;
    const productValue=new Decimal(productPrice[i].textContent.split("$")[1]).toNumber();

    minus.addEventListener("click", () => {
        totalAmount=new Decimal(Number(total.textContent.split("$")[1])).toNumber();
        if (number.textContent > 0) {
            num--
            number.textContent=num;          
            total.textContent="$"+new Decimal(totalAmount).sub(productValue).toNumber();
        }
    })
    plus.addEventListener("click", () => {
        totalAmount=new Decimal(Number(total.textContent.split("$")[1])).toNumber();
        num++
        number.textContent=num           
        total.textContent="$"+new Decimal(totalAmount).add(productValue).toNumber();   
       
       
    })
  
    i++;
   
}
