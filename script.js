window.addEventListener('load', () => {
  let portfolioContainer = document.querySelector('.filter_sub_section');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.fltr_common', 
      filter: '.fltr1',
      transitionDuration: 0,
    });



    let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

    portfolioFilters.forEach(function (filter) {
      filter.addEventListener('click', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      });
    });
  }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
