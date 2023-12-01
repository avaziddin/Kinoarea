// Soon...

export function loadEvents() {
    let popularMoviesSelector = document.querySelector(".year__list");
    popularMoviesSelector.addEventListener("wheel", popularMoviesSelectorScroll);
}

function popularMoviesSelectorScroll(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
}