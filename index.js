// console.log('Hello')

// const link = document.querySelector('a')
// link.textContent = 'MDN';
// link.href = 'https://developer.mozilla.org/en-US/' 

// const links  = document.querySelectorAll('a');
// console.log(links)

// const para = document.querySelector('#myPara');
// // para.textContent = ' ';
// // console.log(para); 

// const cat = document.querySelectorAll('.cat');
// // cat.width = 240;
// // cat.height = 160;
// // cat.alt = 'Kitten';

// cat.forEach((el, key, parent) => {
//     el.setAttribute('width', 240);
//     el.setAttribute('height', 160 );
// })

// cat.setAttribute()
// console.log(cat.height);

// const changeProp = (name, value, selector) => {
//     const el = document.querySelector(selector)

//     el.setAttribute(name, value);
// }

// const sect = document.querySelector('section');

// const newP = document.createElement('p');
// newP.textContent = 'This paragraph was created without concerns of entropy';

// sect.appendChild(newP);
// newP.style.backgroundColor = 'black'; // tick


// newP.style.color = 'white';
// para.remove();

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const sect = document.querySelector('section');

    const newP = document.createElement('p');
    newP.textContent = 'This paragraph was created with an event handler';
    
    sect.appendChild(newP);
});

btn.addEventListener('dblclick', function (params) {
    console.log(params);

    const p = document.querySelectorAll('p');

    p.forEach(function (el) {
        el.setAttribute('class', 'yellow')
    })
})

// btn.addEventListener('mouseover', function () {
//     btn.setAttribute('class', 'hover');
// })

// btn.addEventListener('mouseout', function () {
//     btn.removeAttribute('class', 'hover');
// })

// https://developer.mozilla.org/en-US/docs/Web/Events