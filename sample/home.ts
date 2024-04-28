
interface DesignItem {
    imgSrc: string;
    likes: number;
}

// Function to create design item HTML
function createDesignItem(item: DesignItem): HTMLDivElement {
    const designItem = document.createElement('div');
    designItem.classList.add('design-item');

    const designImg = document.createElement('div');
    designImg.classList.add('design-img');
    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = '';
    designImg.appendChild(img);
    const likes = document.createElement('span');
    likes.innerHTML = `<i class="far fa-heart"></i> ${item.likes}`;
    designImg.appendChild(likes);
    const offers = document.createElement('span');
    offers.textContent = 'New offers';
    designImg.appendChild(offers);

    const designTitle = document.createElement('div');
    designTitle.classList.add('design-title');
    const titleLink = document.createElement('a');
    titleLink.href = '#';
    titleLink.textContent = 'Recent trending and new models are published.';
    designTitle.appendChild(titleLink);

    designItem.appendChild(designImg);
    designItem.appendChild(designTitle);

    return designItem;
}


function initializePage() {
    
    const designContent = document.querySelector('.design-content');
    if (designContent) {
        const items: DesignItem[] = [
            { imgSrc: 'images/do.jpg', likes: 22 },
            { imgSrc: 'images/dow.jpg', likes: 22 },
            { imgSrc: 'images/down.jpg', likes: 22 },
            { imgSrc: 'images/downl.jpg', likes: 22 },
            { imgSrc: 'images/downlo.jpg', likes: 22 },
            { imgSrc: 'images/downloa.jpg', likes: 22 },
        ];

        items.forEach(item => {
            const designItem = createDesignItem(item);
            designContent.appendChild(designItem);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});
