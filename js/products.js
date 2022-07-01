const gridContainer = document.getElementById('gridLayout');
const listContainer = document.getElementById('listLayout');
const cartBtn = document.getElementById('addCartBtn');


const products = [
  {
    id: 1,
    title: "Corsair CV650 Power Supply",
    currentPrice: 340.00,
  },
  {
    id: 2,
    title: "SPECTRIX RAM DDR4 8GB x2",
    currentPrice: 120.00,
  },
  {
    id: 3,
    title: "GEFORCE GTX Battle Ax 8GB",
    currentPrice: 1229.00,
  },
  {
    id: 4,
    title: "Intel Core I9 12th Gen",
    currentPrice: 1510.00,
  },
  {
    id: 5,
    title: "AUROS B550 Elite motherboard",
    currentPrice: 700.00,
  },
  {
    id: 6,
    title: "NZXT Casing white and black model",
    currentPrice: 269.00,
  },
  {
    id: 7,
    title: "WALRAM SSD Sata 3 500GB",
    currentPrice: 550.00,
  },
  {
    id: 8,
    title: "WD Purple Hard Disk 1TB",
    currentPrice: 359.00,
  },

];
// Initialize App
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
      '<a href="#" id="addCartBtn"><i class="fas fa-shopping-cart"></i></a>' +
      '</li>' +
      ' </ul>' +
      '</div >' +
      '<div class="part-2">' +
      `<h3 class="product-title">${products[i].title}</h3>` +
      `<h4 class="product-price">RM ${products[i].currentPrice}</h4>` +
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
      `<td class="d-20">RM ${products[i].currentPrice}</td>` +
      '<td><button id="addCartBtn" type="button" class="btn btn-primary"><i class="fas fa-shopping-cart"></i></button></td>' +
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
    console.log(btnCart);
  }
}




