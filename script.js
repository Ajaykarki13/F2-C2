let inputs = document.querySelectorAll('input')

let btn= document.querySelector('button')

let emploicount = document.querySelector('span')

let alert = document.getElementById('result')

btn.disabled=true; 
let arr=[]
inputs[0].addEventListener("input",()=>{btn.disabled=false})

btn.addEventListener("click",addemployee)

function addemployee(Event)
{
    Event.preventDefault();
    if(inputs[0].value==""||inputs[1].value==""||inputs[2].value=="")
    {
          alert.innerHTML = "<p style='color:red'>Error: Please fill all fields!</p>";
          
          
    }
    else
    {alert.innerHTML = "<p style='color:green'>Success: Employee Added!</p>";}
    let obj={id:arr.length+1,name:inputs[0].value,profession:inputs[1].value,age:inputs[2].value}
    arr.push(obj)

    emploicount.innerHTML=arr.length;
}