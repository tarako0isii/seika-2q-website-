import { animate, waapi, stagger, utils, createScope } from 'animejs';

function addItem() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  1');

  let anime_area = document.getElementById('anime_area');

  for (let i = 0; i < value.length; i++) {
    let span = document.createElement('span');
    span.className = 'one';
    span.textContent = value[i];
    anime_area.appendChild(span);
  }

  animate('span', {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0,
    },
    delay: (_, i) => i * 50, // Function based value
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true,
  });

  waapi.animate('.one', {
    translate: `0 -2rem`,
    delay: stagger(100),
    duration: 600,
    loop: true,
    alternate: true,
    ease: 'inOut(2)',
  });
}

function addItem2() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  2');

  let anime_area = document.getElementById('anime_area');

  for (let i = 0; i < value.length; i++) {
    let div = document.createElement('div');
    div.className = 'two';
    div.textContent = value;
    anime_area.appendChild(div);
  }

  waapi.animate('.two', {
    translate: '17rem',
    delay: stagger(100),
    loop: true,
    alternate: true,
  });
}

let anime_judgment = false;

function addItem3() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  3');

  let anime_area = document.getElementById('anime_area');

  if (anime_judgment == false) {
    for (let i = 0; i < value.length; i++) {
      let div = document.createElement('div');
      div.className = 'three';
      div.textContent = value;
      anime_area.appendChild(div);
    }
    anime_judgment = true;
  } else if (anime_judgment == true) {
    utils.set('.three', {
      x: () => utils.random(0, 20) + 'rem',
      rotate: () => utils.random(0, 180),
      scale: () => utils.random(0.25, 1, 3),
    });

    anime_judgment = false;
  }
  animate('.three', {
    y: stagger(['-1.23rem', '1rem']),
    rotate: { from: stagger('-.125turn') },
    loop: 1,
    alternate: true,
  });
}

function addItem4() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  4');

  let anime_area = document.getElementById('anime_area');

  let square = document.createElement('div');
  square.className = 'square';
  let div = document.createElement('div');
  div.className = 'four';
  div.textContent = value;
  square.appendChild(div);
  anime_area.appendChild(square);

  createScope({ root: '.row:nth-child(2)' }).add(() => {
    animate('.square', {
      x: '45rem',
      loop: true,
      alternate: true,
    });
  });
}

// ボタン１
document.getElementById('add-button').addEventListener('click', addItem);
document.getElementById('add-button2').addEventListener('click', addItem2);
document.getElementById('add-button3').addEventListener('click', addItem3);
document.getElementById('add-button4').addEventListener('click', addItem4);
