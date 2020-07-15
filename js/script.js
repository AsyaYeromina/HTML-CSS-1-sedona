var searchForm = document.querySelector(".hotel-search__form");
var searchFormButton = document.querySelector(".hotel-search__button");
var searchFormInput = document.querySelector(".hotel-search__input");
var inputArrival = document.querySelector(".hotel-search__input--arrival");
var inputDeparture = document.querySelector(".hotel-search__input--departure");
var inputAdults = document.querySelector(".hotel-search__input--adults");
var inputRequiredAll = document.querySelectorAll(".hotel-search__input--required");

if (searchFormButton !== null && searchFormInput !== null && searchForm !== null && inputArrival !==null && inputDeparture !==null && inputAdults !==null && inputRequiredAll !==null) {
    // Hiding the search form on page
    searchForm.classList.add("hotel-search__form--hidden");

    // Showing/hiding the form after click on button 
    searchFormButton.addEventListener("click", function (evt) {
        searchForm.classList.toggle("hotel-search__form--hidden");

        if (searchForm.className.indexOf("hotel-search__form--hidden") === -1) {
            setTimeout(function() {
                searchFormInput.focus();
                // Setting focus after animation "down" ends
            }, 500);
        }
    });

    searchForm.addEventListener("submit", function (evt) {
        if (!inputArrival.value || !inputDeparture.value || !inputAdults.value) {
            evt.preventDefault();

            inputRequiredAll.forEach(function (searchFormInput) {

                if (searchFormInput.value.length < 1) {
                    searchFormInput.classList.remove("hotel-search__input--error");
                    searchForm.offsetWidth = searchForm.offsetWidth;
                    // Removing before adding class allows animation for every submit attempt 
                    searchFormInput.classList.add("hotel-search__input--error");
                    searchForm.offsetWidth = searchForm.offsetWidth;
                    // Removing class after animation ends (0.5s)
                    setTimeout(function() {
                        searchFormInput.classList.remove("hotel-search__input--error");
                        // Removing class because otherway it will work everytime the form is shown (after first submit with errors)
                    }, 500);
                }
            });
        }
    });
};