import { elements } from './views/base';

window.addEventListener('click', e => {
    const index = e.target.id;
    console.log(index)
    if(index === 'r1' || index === 'r2' || index === 'r3'){
        elements.indicator.classList.remove('animation');
    } else {
        elements.indicator.classList.add('animation');
    }
})

elements.hamberger.addEventListener('click', () => {
    elements.hambergerHover.classList.toggle('visible');
})