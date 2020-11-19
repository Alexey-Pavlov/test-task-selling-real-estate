/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

/* Filter on mobile devices */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Click on button to show/hide filter and change icon
sidebarToggleBtn.onclick = () => {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/* Show 3 more cards */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

//Click on button and show 3 hidden cards
btnShowMoreCards.addEventListener('click', () => {
    hiddenCards.forEach((card) => card.classList.remove('card-link--hidden'));
});

/* Show/Hide widgets content */
const widgets = document.querySelectorAll('.widget');

// Find all widgets on the page
widgets.forEach((widget) => {
    //Listen click inside the widget
    widget.addEventListener('click', (e) => {
        // if click on title then hide/show body if widget
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__titile--active');
            e.target.nextElementSibling.classList.toggle(
                'widget__body--hidden'
            );
        }
    });
});

/* Location - 'any' button */
const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll(
    '[data-location-param]'
);

// 'Any' button click and turn off another checkboxes
checkboxAny.addEventListener('change', () => {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    } else {
    }
});

// Click on another buttons in Location except 'Any' button, turn off 'Any' button
topLocationCheckboxes.forEach((topLocationCheckbox) => {
    topLocationCheckbox.addEventListener('change', () => {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    });
});

/* Show 3 more options with checkboxes in filter */

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = (e) => {
    e.preventDefault();
    //if blocks was hidden then show it
    if (showMoreOptions.dataset.options === 'hidden') {
        hiddenCheckboxes.forEach((hiddenCheckbox) => {
            hiddenCheckbox.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';
    }
    // if blocks was visible then hide it
    else if (showMoreOptions.dataset.options === 'visible') {
        hiddenCheckboxes.forEach((hiddenCheckbox) => {
            hiddenCheckbox.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }
};
