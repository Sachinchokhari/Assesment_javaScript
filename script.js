const images = [
    'https://th.bing.com/th/id/OIP.AXRKm4EQH8VoDqd64zob3QHaEo?rs=1&pid=ImgDetMain',
    'https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg',
    'https://cdn.bmstores.co.uk/images/dmImage/SourceImage/pizza-toast-recipe-4.jpg',
    'https://i.pinimg.com/originals/ce/04/15/ce0415ab07179bd41e2c69c1cb368012.jpg',
    'https://images3.alphacoders.com/104/thumb-1920-1041781.jpg',
    'https://th.bing.com/th/id/OIP.a8IZg_RpXZ1QJGgbSWsP2gHaEK?rs=1&pid=ImgDetMain',
    'https://c4.wallpaperflare.com/wallpaper/532/938/333/pizza-cheese-tomato-vegetables-wallpaper-preview.jpg' ,
    'https://artifacts.news/wp-content/uploads/sites/176/2023/07/Pizza-Slice-Cheese-Peppers-Mushrooms-Tomatoes.jpg',
    'https://wallpaperaccess.com/full/4690728.jpg'


];

let currentIndex = 0;

function createImageElement(src, className) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    return img;
}

function updateMainImage() {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[currentIndex];
    updateThumbnails();
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

function onThumbnailClick(event) {
    currentIndex = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
    updateMainImage();
}

function onNextClick() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
    scrollToCurrentThumbnail();
}

function onPrevClick() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
    scrollToCurrentThumbnail();
}

function scrollToCurrentThumbnail() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const container = document.getElementById('thumbnailContainer');
    const currentThumbnail = thumbnails[currentIndex];
    container.scrollLeft = currentThumbnail.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (currentThumbnail.clientWidth / 2);
}

function initializeSlider(images) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const mainImage = document.getElementById('mainImage');

    if (images.length > 0) {
        mainImage.src = images[0];
    }

    images.forEach((imageSrc, index) => {
        const thumbnail = createImageElement(imageSrc, 'thumbnail');
        thumbnail.addEventListener('click', onThumbnailClick);
        thumbnailContainer.appendChild(thumbnail);
    });

    document.querySelector('.next').addEventListener('click', onNextClick);
    document.querySelector('.prev').addEventListener('click', onPrevClick);

    updateThumbnails();
}

initializeSlider(images);
