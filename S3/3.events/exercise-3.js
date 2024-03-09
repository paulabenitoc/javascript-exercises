const myInput = document.getElementById('myInput');
    
myInput.addEventListener('input', function(event) {
    console.log(event.target.value);
});