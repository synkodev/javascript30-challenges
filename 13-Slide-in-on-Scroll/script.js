/**
 * Function provided to slow down the rythm of execution of the
 * event to prevent performance issues
 */
function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  images.forEach(image => {
    /** Defines the Y point where the image will be displayed */
    const imgSlideY = (window.scrollY + window.innerHeight) - image.height / 3;
    /** Sums the images' offsetTop property (distance from the top of the page) with the height */
    const imgBottom = image.offsetTop + image.height;
    /** True if the Y pixel distance calculated in imgSlideY reaches the top of the image */
    const isShown = imgSlideY > image.offsetTop;
    /** True if the top of the page is already past the bottom of the image */
    const isScrolledPast = window.scrollY > imgBottom;
    if (isShown && !isScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

const images = document.querySelectorAll('img.slide-in');

window.addEventListener('scroll', debounce(checkSlide))
