let height = prompt("Výška:");
let widht = prompt("Šířka:");

function table() {
    let mydiv = document.getElementsByTagName("div")[0];
    let table = document.createElement("table");
    let tbodyy = document.createElement('tbody');
    

    for (let x = 0; x < height; x++) {
        let trr = document.createElement('tr');
        for (let y = 0; y < widht; y++) {
            let tdd = document.createElement('td');
            if (x%2 == y%2) {
                tdd.className = "white";
            } else {
               tdd.className = "black";
            }
            trr.appendChild(tdd);
        }
        tbodyy.appendChild(trr);
    }
    table.appendChild(tbodyy);
    mydiv.appendChild(table);
    
}

window.addEventListener("DOMContentLoaded", function() {
    table();
}, false);