const docBody = document.querySelector('body');
const lightThemeBtn = document.getElementById('light-theme-btn');
const darkThemeBtn = document.getElementById('dark-theme-btn');
const expandablItems = document.querySelectorAll('.sidebar .sidebar-content ul li.has-children');

lightThemeBtn.addEventListener('click', activeLightTheme);
darkThemeBtn.addEventListener('click', activeDarkTheme);

function activeLightTheme() {
    lightThemeBtn.classList.add('active');
    darkThemeBtn.classList.remove('active');
    docBody.classList.remove('dark-theme');
}

function activeDarkTheme() {
    lightThemeBtn.classList.remove('active');
    darkThemeBtn.classList.add('active');
    docBody.classList.add('dark-theme');
}

expandablItems.forEach(item => {
    item.querySelector('a').addEventListener('click', (e) => {
        item.classList.toggle('expanded');
    })
})