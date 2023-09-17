// Velikost okna

// Zjistěte, jak velké je okno stránky a prohlížeče.
const div = document.getElementsByClassName('window');

let siteWidth = window.innerWidth;
let siteHeight = window.innerHeight;
div[0].innerHTML +=
  '<h2>Velikost prohlížeče</h2> ' +
  '<p>Skutečná: ' +
  '<span>' +
  siteWidth +
  '</span>' +
  ' x ' +
  '<span>' +
  siteHeight +
  '</span>' +
  'px</p>';

// Pohrajte si s vlastnostmi window.innerWidth a window.innerHeight a zjistěte, jak velké je okno stránky. Vypište tyto hodnoty do stránky a zkuste stránky několikrát změnšít a zvětšit, Pozor, že je vždy potřeba udělat refresh stránky, aby se hodnoty změnily.
let nahodnéCislo = Number(prompt('Zadejte libovolné číslo'));
siteWidth *= nahodnéCislo;
siteHeight *= nahodnéCislo;

div[0].innerHTML +=
  '<p>Znásobená vaším číslem: ' +
  '<span>' +
  siteWidth +
  '</span>' +
  ' x ' +
  '<span>' +
  siteHeight +
  '</span>' +
  'px</p>';
// Vypište do stránky také vlastnosti window.outerWidth a window.outerHeight. Opět si pohrajte s velíkostí okna prohlížeče a pozorujte, jak se tyto hodnoty mění.
// let browserWidth = window.outerWidth;
// let browserHeight = window.outerHeight;

// browserWidth *= nahodnéCislo;
// browserHeight *= nahodnéCislo;

// div[0].innerHTML +=
//   '<h2>Velikost okna</h2> ' +
//   '<p>Skutečná: ' +
//   '<span>' +
//   browserWidth +
//   '</span>' +
//   ' x ' +
//   '<span>' +
//   browserHeight +
//   '</span>' +
//   'px</p>';

// div[0].innerHTML +=
//   '<p>Znásobená vaším číslem: ' +
//   '<span>' +
//   browserWidth +
//   '</span>' +
//   ' x ' +
//   '<span>' +
//   browserHeight +
//   '</span>' +
//   'px</p>';
