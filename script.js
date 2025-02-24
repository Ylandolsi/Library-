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
        dialog.showModal();

    }) 
}) ; 

// cancelButton.addEventListener("click", function() {
//     dialog.close();
// }
// ); 
// saveButton.addEventListener("click", function() {
//     dialog.close();
// });