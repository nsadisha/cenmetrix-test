const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(cb => {
    cb.addEventListener('click', (e) => {
        let target = e.target;
        target.classList.toggle('checked');
    })
})