// * ScrollTrigger for color linear gradient text  animation
// gsap_scrollTrigger

gsap.registerPlugin(ScrollTrigger)

const titleElements = gsap.utils.toArray('.title');
const subtitleElements = gsap.utils.toArray('.subtitle');
const textElements = gsap.utils.toArray('.text');

titleElements.forEach(text => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'center 50%',
            end: 'center 100%',
            scrub: true,
            once: true,
        },
    });
});
subtitleElements.forEach(text => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'center 50%',
            end: 'center 100%',
            scrub: true,
            once: true,
        },
    });
});
textElements.forEach(text => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'center 50%',
            end: 'center 100%',
            scrub: true,
            once: true
        },
    });
});