function lazyLoadImages() {
    document.addEventListener('DOMContentLoaded', function () {
        const lazyImages = document.querySelectorAll('.lazy-load');

        function loadImage(image) {
            image.src = image.dataset.src;
            image.onload = () => {
                image.classList.add('loaded');
            };
        }

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    loadImage(image);
                    observer.unobserve(image);
                }
            });
        }

        // Проверяем поддержку loading="lazy"
        if ('loading' in HTMLImageElement.prototype) {
            // Браузер поддерживает loading="lazy", ничего не делаем
            console.log('loading="lazy" поддерживается браузером');
        } else {
            // Браузер НЕ поддерживает loading="lazy", используем Intersection Observer
            console.log('loading="lazy" НЕ поддерживается, используем Intersection Observer');
            const observer = new IntersectionObserver(handleIntersection);
            lazyImages.forEach(image => {
                observer.observe(image);
            });
        }
    });
}

export default lazyLoadImages;