const elementsWithAttribute = document.querySelectorAll('[data-function="testMe"]');

elementsWithAttribute.forEach(element => {
    console.log(element.textContent)
})