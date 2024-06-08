document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker Registered'));
    }
});

function loadHome() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const content = document.getElementById('content');
            content.innerHTML = `<h2>Home</h2><ul class="list-group">` +
                users.map(user => `<li class="list-group-item">${user.name}</li>`).join('') +
                `</ul>`;
        });
}

function loadGallery() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => response.json())
        .then(photos => {
            const content = document.getElementById('content');
            content.innerHTML = `<h2>Gallery</h2><div class="row">` +
                photos.map(photo => `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                            <div class="card-body">
                                <p class="card-text">${photo.title}</p>
                            </div>
                        </div>
                    </div>`).join('') +
                `</div>`;
        });
}

function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = `<h2>About</h2>
    <p>This application was developed by [Your Name].</p>`;
}
