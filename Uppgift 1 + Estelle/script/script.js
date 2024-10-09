
let foo = 0;
let bar = 0;


document.getElementById('divideButton').addEventListener('click', function() {

    foo = parseFloat(document.getElementById('foo').value);
    bar = parseFloat(document.getElementById('bar').value);


    if (bar === 0) {
        alert("Du kan inte dela 0 med 0!");
    } else {
        let result = foo / bar;
        console.log("Resultatet är: " + result);
    }

 
    console.log("divide");
});

