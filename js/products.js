// const btnList = document.querySelector("#btnList");
// const btnGrid = document.querySelector("#btnGrid");
let gridContainer = document.getElementById('gridLayout');
let listContainer = document.getElementById('listLayout');

let products = [
  {
    id: 1,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 2,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 3,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 4,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 5,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 6,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 7,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },
  {
    id: 8,
    title: "Corsair power supply",
    currentPrice: 120.00,
    oldPrice: null,
  },

];
initApp();

function initApp() {
  if (document.getElementById("btnradio1").checked === true) {
    loadGrid();
    listContainer.classList.add('hide');
  }
}

function loadGrid() {
  var output = [];
  for (var i = 0; i < products.length; i++) {
    output.push(
      '<div class="col-md-6 col-lg-4 col-xl-3">' +
      `<div id="product-${i + 1}" class="single-product shadow-sm rounded">` +
      '<div class="part-1">' +
      '<ul>' +
      '<li>' +
      '<a href="#"><i class="fas fa-shopping-cart"></i></a>' +
      '</li>' +
      // '<li>' +
      // '<a href="#"><i class="fas fa-expand"></i></a>' +
      // '</li>' +
      ' </ul>' +
      '</div >' +
      '<div class="part-2">' +
      `<h3 class="product-title">${products[i].title}</h3>` +
      // `<h4 class="product-old-price">RM${products[i].oldPrice === null ? null : products[i].oldPrice}</h4>`+
      `<h4 class="product-price">RM${products[i].currentPrice}</h4>` +
      '</div>' +
      '</div >' +
      '</div >'
    );
  }
  gridContainer.innerHTML = output.join('');
}

function loadList() {
  let tableBody = document.getElementById('tb-body');
  var output = [];
  for (var i = 0; i < products.length; i++) {
    output.push(
      `<tr id="product-${i + 1}" class="single-product row-direction align-middle">` +
      `<td style="width: 300px"><div class="part-1 list"></div></td>` +
      `<td>${products[i].title}</td>` +
      `<td class="d-20">${products[i].currentPrice}</td>` +
      '<td><button type="button" class="btn btn-primary"><i class="fas fa-shopping-cart"></i></button></td>' +
      '</tr >'
    );
  }
  tableBody.innerHTML = output.join('');
}

function checkBtnLayout(name) {
  if (name == "btnradio1") {
    console.log("Name: ", name);
    document.getElementById("btnradio2").checked = false;
    loadGrid();
    listContainer.classList.add('hide');
    gridContainer.classList.remove('hide');

  } else if (name == "btnradio2") {
    console.log("Name: ", name);
    document.getElementById("btnradio1").checked = false;
    loadList();
    gridContainer.classList.add('hide');
    listContainer.classList.remove('hide');
  }
}
