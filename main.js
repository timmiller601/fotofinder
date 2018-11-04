document.querySelctor('choose-file-button').addEventListener('click', );
document.querySelctor('add-album-button').addEventListener('click',);
document.querySelctor('view-favorites-button').addEventListener('click',);
document.getElementById('search-input').addEventListener('keyup', searchFilter);

reloadCards();




function searchFilter() {
  Object.keys(localStorage).forEach(function(cardObj) {
    let matchingCardsObject = document.getElementById(`${JSON.parse(localStorage[cardObj]).id}`);
    let matchingCards = matchingCardsObject.parentNode.parentNode;
    let localStorageTitle = JSON.parse(localStorage[cardObj]).title;
    let localStorageBody = JSON.parse(localStorage[cardObj]).body;
    let searchInput = document.getElementById('search-input').value.toLowerCase();
      if (!localStorageTitle.toLowerCase().includes(searchInput) && !localStorageBody.toLowerCase().includes(searchInput)) {
        matchingCards.classList.add('display-mode-none');
      } else if (localStorageTitle.toLowerCase().includes(searchInput) && localStorageBody.toLowerCase().includes(searchInput)) {
        matchingCards.classList.remove('display-mode-none');
      }
    })
};

function populateIdeaCard() {
  var card = document.createElement('section');
  var cardArticle = document.getElementById('card-article');
  card.className = 'photo-card';
  card.dataset.index = photo.id;
  card.innerHTML = 
    `<div class="photo-card" data-id=${photo.id}>
        <p class="title">This is a long title to test the hidden attribute</p>
        <img class="photo" src="assets/test.jpg" alt="photo">
        <p class="caption">This is a test caption to see what it looks like when we have a long block of text.</p>
        <section class="card-footer">
          <img class="card-icons" src="assets/delete.svg" alt="delete icon">
          <img class="card-icons favorite-icon" src="assets/favorite.svg" alt="favorite icon">
        </section>
        <p class="card-placeholder">Add some photos to your album!</p>`;

  cardArticle.insertBefore(card, cardArticle.firstChild); 
};