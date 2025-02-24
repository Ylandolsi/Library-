let gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach( item => {
    item.addEventListener("mouseover", function() {
        for (let i = 0; i < gridItems.length; i++) {
            if ( gridItems[i] == item ) {
                continue
            }
            gridItems[i].style.filter = 'blur(4px)'
        }
        item.style.transition = 'all 0.3s ease';
        item.style.transform = 'scale(1.1)'
    } ) 
    item.addEventListener("mouseout", function() {
        for ( let i = 0 ; i < gridItems.length ; i++ ) 
        {
            gridItems[i].style.filter = 'blur(0px)'
        }
        item.style.transform = 'scale(1)';
    } ) ; 

} );

const dialog = document.querySelector("dialog");
let addButtons= document.querySelectorAll('.crtbutt');

let cancelButton = document.querySelector(".close-btn");
let saveButton = document.querySelector(".submit");
addButtons.forEach( button => {
    button.addEventListener("click", function() {
        document.getElementById('bookName').value = '';
        document.getElementById('imageUrl').value = '';
        document.getElementById('description').value = '';
        dialog.showModal();

    }) 
}) ; 

cancelButton.addEventListener("click", function() {

    dialog.close();
}
); 

function addBookToLibrary ( title, url ,description , read){
    const newItem = document.createElement('div');
    newItem.className = 'grid-item';

//---------------------
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const readStatus = document.createElement('p');
    readStatus.textContent = read ? 'Read' : 'Not Read';


    const descElement = document.createElement('p');
    descElement.textContent = description;
// ------------------------

    const bookcover = document.createElement('div');
    bookcover.className = 'bookcover';
    const imgElement = document.createElement('img');
    imgElement.src = url;
    bookcover.appendChild(imgElement);

    newItem.appendChild(bookcover);

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.insertBefore(newItem, gridContainer.lastElementChild);
}
saveButton.addEventListener("click", function() {
    const title = document.getElementById('bookName').value;
    const url = document.getElementById('imageUrl').value;
    const description = document.getElementById('description').value;
    const read = document.getElementById('isRead').checked;

    if (title && url ) {
        addBookToLibrary(title, url, description  ,read );
    } else {
        alert('Please fill in all required fields');
        return;
    }

    dialog.close();
});