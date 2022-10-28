const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        if (slide.classList.contains('active')) {
            clearActiveClasses(slide)
        }
        else {
            clearActiveClasses(slide)
            slide.classList.add('active')
        }

        if (slide.classList.contains('active')) {
            switch (slide) {
                case slides[0]:
                    body.style.background = 'rgb(27, 27, 27)'
                    break;
                case slides[1]:
                    body.style.background = 'rgba(146, 146, 146, 0.816)'
                    break;
                case slides[2]:
                    body.style.background = 'rgb(95, 66, 101)'
                    break;
                case slides[3]:
                    body.style.background = 'rgb(28, 193, 91)'
                    break;
                case slides[4]:
                    body.style.background = 'rgba(231, 195, 224, 0.663)'
                    break;
            }
        }
        else {
            body.style.background = 'rgba(215, 148, 202, 0.816)'
        }

    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}