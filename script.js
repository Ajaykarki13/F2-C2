let inputs = document.querySelectorAll('input')

let btn = document.querySelector('button')

let emploicount = document.querySelector('span')

let alert = document.getElementById('result')

let tablebody = document.getElementById('tbody')

btn.disabled = true;
let arr = []

inputs[0].addEventListener("input", () => { btn.disabled = false })

btn.addEventListener("click", addemployee)

function addemployee(Event) {

    Event.preventDefault();

    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "")
     {
        alert.innerHTML = "<p style='color:red'>Error: Please fill all fields!</p>";
    }
    else
     {
         alert.innerHTML = "<p style='color:green'>Success: Employee Added!</p>";
     }

    let obj = { id: arr.length + 1, name: inputs[0].value, profession: inputs[1].value, age: inputs[2].value }

    arr.push(obj)

    emploicount.innerHTML = arr.length;

     createtable();
    // creating row  and appending cells into the row on every adduser button
    }

    function createtable()
    {

    let row = document.createElement("tr")
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("button")
              c5.innerHTML="Delete Employee"
               c5.setAttribute("id","delete")

     row.appendChild(c1)
     row.appendChild(c2)
     row.appendChild(c3)
     row.appendChild(c4)
     row.appendChild(c5)

    arr.map(employee => {

     c1.innerText = employee.id, c2.innerText = employee.name, c3.innerText = employee.profession,
         c4.innerText = employee.age
         c5.addEventListener('click',()=>{
             row.remove()
            //arr.splice(arr.indexOf(employee),1)

                        } )

                    } )

//appending row with  cells value to document's tbody

    tablebody.appendChild(row)

}

    


