document.getElementById('toggleYoutubeButton').addEventListener('click', toggleYoutube);

function toggleYoutube() {
    const youtubeList = document.getElementById('youtubeList');
    if (youtubeList.style.display === 'none' || youtubeList.style.display === '') {
        youtubeList.style.display = 'block';
        youtubeList.style.opacity = '0';
        youtubeList.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            youtubeList.style.transition = 'opacity 0.5s, transform 0.5s';
            youtubeList.style.opacity = '1';
            youtubeList.style.transform = 'translateY(0)';
        }, 10);
    } else {
        youtubeList.style.transition = 'opacity 0.5s, transform 0.5s';
        youtubeList.style.opacity = '0';
        youtubeList.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            youtubeList.style.display = 'none';
        }, 500);
    }
}
