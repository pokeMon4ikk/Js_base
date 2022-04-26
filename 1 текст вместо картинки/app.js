const buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        handleClick(event);
    });
});


function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const text = card.button.innerText;
    if (text === 'Подробнее') {
        showMoreText(card);
    } else if (text === 'Отмена') {
        hideMoreText(card);
    }
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';

}

function showMoreText(card) {
    card.img.style.display = 'none';
    const newText = "Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello";
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${newText}</div>`);
    card.button.innerText = 'Отмена';
}
