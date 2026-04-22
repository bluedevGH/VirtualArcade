console.log("hi im sprint and going")

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('body').addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'light':
                document.body.className = 'theme-default';
                console.log('light');
                break;
            case 'dark':
                document.body.className = 'theme-dark';
                console.log('dark');
                break;
        }
    });
});