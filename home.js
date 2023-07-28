document.addEventListener('DOMContentLoaded', function () {
    const cardBoxes = document.querySelectorAll('.card-box');

    cardBoxes.forEach(cardBox => {
        cardBox.addEventListener('click', () => {
            const url = cardBox.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});
