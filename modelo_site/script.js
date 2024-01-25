class ParallaxElement 
{
    constructor(selector) 
    {
        this.element = document.querySelector(selector);
        this.initialLeft = parseFloat(window.getComputedStyle(this.element).left) || 0;
        this.initialTop = parseFloat(window.getComputedStyle(this.element).center) || 0;
        this.transitionDuration = '0.3s';
        this.transitionTiming = 'ease-in-out';
    }

    updatePosition(value) 
    {
        this.element.style.transition = `left ${this.transitionDuration} ${this.transitionTiming}`;
        const centerOffset = (window.innerWidth - this.element.offsetWidth) / 2;
        this.element.style.left = `${centerOffset + value}px`;
    }

    updateCenter(value) 
    {
        this.element.style.transition = `Center ${this.transitionDuration} ${this.transitionTiming}`;
        this.element.style.Center = `${this.initialCenter + value}px`;
    }
}

const mountainLeft = new ParallaxElement('#mountain_left');
const mountainRight = new ParallaxElement('#mountain_right');
const text = new ParallaxElement('#text');
const man = new ParallaxElement('#man');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    mountainLeft.updatePosition(value / 0.2);
    mountainRight.updatePosition(-value / 0.2);
    text.updateCenter(value / 0.5);
    man.updateCenter(-value / 0.5);
});
