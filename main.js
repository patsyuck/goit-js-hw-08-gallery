import gallery from './gallery-items.js'
const imagesNode = document.querySelector('ul.gallery')
const modalNode = document.querySelector('div.lightbox')
const imageNode = document.querySelector('img.lightbox__image')
const closeNode = document.querySelector('button[data-action="close-lightbox"]')

imagesNode.insertAdjacentHTML('beforeend', gallery.reduce((acc, item) => acc +
`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    </a>
</li>`, ''))

function closeModalWindow() {
    modalNode.classList.remove('is-open')
    imageNode.setAttribute('src', '')
}

function openModalWindow(event) {


    event.preventDefault()


    const target = event.target
    /*console.log(target.getAttribute("data-source"))*/
    

    modalNode.classList.add('is-open')
    

    imageNode.setAttribute('src', target.getAttribute('data-source'))
    

    closeNode.addEventListener("click", closeModalWindow)

    
}

imagesNode.addEventListener("click", openModalWindow)