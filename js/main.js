console.log("hello, world!");

let firstname = "Jakob";
console.log(firstname);

// firstname = "test"

console.log("test");

let lastname = "Gullberg";
console.log(lastname);

lastname = "Hult";
console.log(lastname);

lastname = 99;
console.log(lastname);

console.log(typeof lastname);

let empty;
console.log(empty, typeof empty);

let x = 10;
let y = 20;
let sum = x+y;

console.log(sum);

console.log(firstname + lastname);
console.log(firstname * lastname);
console.log(x * lastname);

const shoes = ['Nike', 'adidas','under armour', 'puma'];

console.log(shoes);
console.log(shoes[1]);
console.log(shoes.size);
console.log(typeof shoes);

shoes[0]=0;

function skapaKvadrat(size, color = "hotpink") {
    const kvadrat = document.createElement("div");

    kvadrat.style.width = size + 'px';
    kvadrat.style.height = size;
    kvadrat.style.backgroundColor = color;

    document.body.appendChild(kvadrat);

    console.log(size,color)
}

skapaKvadrat(20,'limegreen');
skapaKvadrat(40,'green');         
skapaKvadrat(200,undefined);  



