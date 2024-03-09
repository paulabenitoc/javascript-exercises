const divsToInsertInto = document.querySelectorAll('.fn-insert-here');

divsToInsertInto.forEach(div => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Voy dentro!';
    div.appendChild(paragraph);
});