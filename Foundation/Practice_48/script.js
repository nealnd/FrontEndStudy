const apiKey = '03DzFxNlcSZe65v2-98IRnKvNmcp_O1R2aiFpynm_RQ';
const images = document.querySelectorAll('img');

async function fetchRandomPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=${images.length}&client_id=${apiKey}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


        data.forEach((photo, index) => {
            if (images[index]) {
                images[index].src = photo.urls.regular;
            }
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


fetchRandomPhotos();
