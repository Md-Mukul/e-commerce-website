const productImages = document.querySelectorAll('.product-img');

productImages.forEach(product => {

    const mainImage = product.querySelector('.big-img img');
    const thumbnails = product.querySelectorAll('.product-small-img img');

    // Thumbnail click => change main image
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
        });
    });

    // Zoom
    mainImage.addEventListener('mousemove', (e) => {

        const rect = mainImage.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        mainImage.style.transformOrigin = `${x}% ${y}%`;
        mainImage.style.transform = 'scale(2)';
    });

    mainImage.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.transformOrigin = 'center center';
    });

});