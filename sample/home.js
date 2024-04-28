// Define TypeScript code for the webpage
// Function to create design item HTML
function createDesignItem(item) {
    var designItem = document.createElement('div');
    designItem.classList.add('design-item');
    var designImg = document.createElement('div');
    designImg.classList.add('design-img');
    var img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = '';
    designImg.appendChild(img);
    var likes = document.createElement('span');
    likes.innerHTML = "<i class=\"far fa-heart\"></i> ".concat(item.likes);
    designImg.appendChild(likes);
    var offers = document.createElement('span');
    offers.textContent = 'New offers';
    designImg.appendChild(offers);
    var designTitle = document.createElement('div');
    designTitle.classList.add('design-title');
    var titleLink = document.createElement('a');
    titleLink.href = '#';
    titleLink.textContent = 'Recent trending and new models are published.';
    designTitle.appendChild(titleLink);
    designItem.appendChild(designImg);
    designItem.appendChild(designTitle);
    return designItem;
}
// Function to initialize the webpage
function initializePage() {
    // Recent New Furnitures Section
    var designContent = document.querySelector('.design-content');
    if (designContent) {
        var items = [
            { imgSrc: 'images/do.jpg', likes: 22 },
            { imgSrc: 'images/dow.jpg', likes: 22 },
            { imgSrc: 'images/down.jpg', likes: 22 },
            { imgSrc: 'images/downl.jpg', likes: 22 },
            { imgSrc: 'images/downlo.jpg', likes: 22 },
            { imgSrc: 'images/downloa.jpg', likes: 22 },
        ];
        items.forEach(function (item) {
            var designItem = createDesignItem(item);
            designContent.appendChild(designItem);
        });
    }
}
// Initialize the webpage when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializePage();
});
