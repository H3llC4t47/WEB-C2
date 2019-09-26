let x = prompt("Zadejte bod x ");
let y = prompt("Zadejte bod y ");
let z = x * x + y * y;
    
if (Math.sqrt(z) < 5) {
    document.write("Bod [" + x + "a " + y + "] je v dosahu dělové věže.");
} else
    document.write("Bod [" + x + "a " + y + "] není v dosahu delové věže.");