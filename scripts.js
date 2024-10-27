let currentTheme = 1;

function changeTheme() {
    currentTheme = (currentTheme % 4) + 1;
    document.body.className = 'theme' + currentTheme;
    updateBackgroundColor(currentTheme);
}

function updateBackgroundColor(theme) {
    document.querySelector('.container').style.background = theme === 2 ? 'rgba(231, 76, 60, 0.9)' :
        theme === 3 ? 'rgba(142, 68, 173, 0.9)' :
        theme === 4 ? 'rgba(39, 174, 96, 0.9)' :
        'rgba(44, 62, 80, 0.9)';
}
