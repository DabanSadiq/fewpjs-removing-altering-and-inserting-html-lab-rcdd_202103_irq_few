let element = createElement('p')
let body = getElementsByTag('body')[0];
let main = getElementByID('main');
main.remove();
element.innerHTML = 'hello';
document.body.appendChild(element);
element.style.color = 'red';