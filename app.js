// https://calculator.swiftutors.com/surface-area-of-a-square-pyramid-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofSquarePyramidRadio = document.getElementById('surfaceAreaofSquarePyramidRadio');
const baseLengthofSquarePyramidRadio = document.getElementById('baseLengthofSquarePyramidRadio');
const slantHeightofSquarePyramidRadio = document.getElementById('slantHeightofSquarePyramidRadio');

let surfaceAreaofSquarePyramid;
let baseLengthofSquarePyramid = v1;
let slantHeightofSquarePyramid = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

surfaceAreaofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = '(b) Base Length of Square Pyramid';
  variable2.textContent = '(s) Slant Height of Square Pyramid';
  baseLengthofSquarePyramid = v1;
  slantHeightofSquarePyramid = v2;
  result.textContent = '';
});

baseLengthofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Square Pyramid';
  variable2.textContent = '(s) Slant Height of Square Pyramid';
  surfaceAreaofSquarePyramid = v1;
  slantHeightofSquarePyramid = v2;
  result.textContent = '';
});

slantHeightofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Square Pyramid';
  variable2.textContent = '(b) Base Length of Square Pyramid';
  surfaceAreaofSquarePyramid = v1;
  baseLengthofSquarePyramid = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofSquarePyramidRadio.checked)
    result.textContent = `Surface Area of Square Pyramid = ${computeSurfaceAreaofSquarePyramid().toFixed(2)}`;

  else if(baseLengthofSquarePyramidRadio.checked)
    result.textContent = `Base Length of Square Pyramid = ${computeBaseLengthofSquarePyramid().toFixed(2)}`;

  else if(slantHeightofSquarePyramidRadio.checked)
    result.textContent = `Slant Height of Square Pyramid = ${computeSlantHeightofSquarePyramid().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofSquarePyramid() {
  return 2 * Number(baseLengthofSquarePyramid.value) * Number(slantHeightofSquarePyramid.value) + Math.pow(Number(baseLengthofSquarePyramid.value), 2);
}

function computeBaseLengthofSquarePyramid() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeSlantHeightofSquarePyramid() {
  return (Number(surfaceAreaofSquarePyramid.value) - Math.pow(Number(baseLengthofSquarePyramid.value), 2)) / (2 * Number(baseLengthofSquarePyramid.value));
}