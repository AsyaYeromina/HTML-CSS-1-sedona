var searchForm = document.querySelector(".hotel-search__form");
var searchFormButton = document.querySelector(".hotel-search__button");
var searchFormInput = document.querySelector(".hotel-search__input");

if (searchFormButton !== null && searchFormInput !== null && searchForm !== null) {
    // Hiding the search form with adding class 
    searchForm.classList.add("hotel-search__form--hidden");

    // Showing the form after click on button 
    searchFormButton.addEventListener("click", function (evt) {
        searchForm.classList.toggle("hotel-search__form--hidden");

        if (searchForm.className.indexOf("hotel-search__form--hidden") === -1) {
            setTimeout(function() {
                searchFormInput.focus();
            }, 500);
        }
    });
};