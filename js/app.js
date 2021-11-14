const images = document.querySelectorAll("img") //select all images
let options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.1
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.className === 'image') {
            const image = entry.target
            console.log(image)
            let imageUrl = image.getAttribute('data-img')
            console.log("imageUrl", imageUrl)
            if (imageUrl) {
                image.src = imageUrl
                observer.unobserve(image)

            }
        }
    })
}
let observer = new IntersectionObserver(callback, options) //Api IntersectionObserver must be called to lasy loading


images.forEach((image) => {
    observer.observe(image);
})