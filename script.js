window.addEventListener('load', () => {
  let portfolioContainer = document.querySelector('.filter_sub_section');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.fltr_common', filter: '.fltr1',
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
