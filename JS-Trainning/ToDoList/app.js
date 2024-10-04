let add = document.getElementById("add")
let input = document.getElementById("input")
let task = document.getElementById("list")

function adds(){
    var item = document.createElement("li")
    item.innerText=input.value;
    task.append(item);
    let button = document.createElement('button');
    button.innerText='delete';
    item.append(button);
    button.addEventListener('click', function() {
        item.remove(); // Remove the item directly
    })
}

