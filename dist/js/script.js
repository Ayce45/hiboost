
function burger() {
    document.querySelector('#nagivation').classList.toggle('active');
}

function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 900 ) );
  }

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.burger').addEventListener('click', burger);
    new Carousel(document.querySelector('#carousel'), {
        slidesToScroll : 2,
        slidesVisible: detectMob() ? 1 : 2,
        pagination: true,
    });
})
