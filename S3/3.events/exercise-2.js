const myInput = document.getElementById('myInput');
    
myInput.addEventListener('focus', function(event) {
    console.log(event.target.value);
});