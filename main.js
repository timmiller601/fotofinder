document.querySelctor('choose-file-button').addEventListener('click', );
document.querySelctor('add-album-button').addEventListener('click',);
document.querySelctor('view-favorites-button').addEventListener('click',);
document.getElementById('search-input').addEventListener('keyup', searchFilter);




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