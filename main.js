import gallery from './gallery-items.js'
/*console.log(gallery)*/
const imagesNode = document.querySelector('ul.gallery')
imagesNode.insertAdjacentHTML('beforeend', gallery.reduce((acc, item) => acc +
`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    </a>
</li>`, ''))

function openModalWindow(event) {
    event.preventDefault()
    const target = event.target
    /*console.log(target.getAttribute("data-source"))*/
    const modalNode = document.querySelector('div.lightbox')
    modalNode.classList.add('is-open')
    const imageNode = document.querySelector('img.lightbox__image')
    imageNode.setAttribute('src', target.getAttribute('data-source'))
    const closeNode = document.querySelector('button[data-action="close-lightbox"]')
    closeNode.addEventListener("click", () => {
        modalNode.classList.remove('is-open')
        imageNode.setAttribute('src', '')
    })
}

imagesNode.addEventListener("click", openModalWindow)