const productForm = document.getElementById("productForm");
const productTableBody = document.getElementById("productTableBody");


// Initial products array
const initialProducts = [
  {
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

let products = [...initialProducts];



productForm.addEventListener("submit", (e) => {
  e.preventDefault();


  let productName = document.getElementById("productName").value;
  let productQuantity = document.getElementById("productQuantity").value;
  let productPrice = document.getElementById("productPrice").value;
  let productVendor = document.getElementById("productVendor").value;
  let productCategory = document.getElementById("productCategory").value;
  let productId = document.getElementById('productId').value;


  if (productName == "" || productQuantity == "" || productPrice == "" || productVendor == "" || productCategory == "") {
    alert("all the field must required to fill");
    return false;
  }
  else if (productQuantity <= 0) {
    alert("Product qantity should be more than 0")
  }
  else if (productPrice <= 0) {
    alert("Product price should be more than 0")
  }
  else {
    let product = {
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      vendor: productVendor,
      category: productCategory,
    };
    if (productId === '') {
      products.push(product);
    } else {

      const index = parseInt(productId);
      products[index] = (product);
    }

    productForm.reset();
    renderProducts();
  }

});


// Function to render products

function renderProducts() {
  productTableBody.innerHTML = "";//clear existing row
  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td class="py-2 px-4 border-b-2 text-center">${product.name}</td>
        <td class="py-2 px-4 border-b-2 text-center">${product.quantity}</td>
        <td class="py-2 px-4 border-b-2 text-center">${product.price}</td>
        <td class="py-2 px-4 border-b-2 text-center">${product.vendor}</td>
        <td class="py-2 px-4 border-b-2 text-center">${product.category}</td>
        <td class="py-2 px-4 border-b-2 text-center">
          <button class="bg-green-700 text-white px-4 py-1 rounded" onclick="editProduct(${index})">Edit</button>
          <button class="bg-red-700 text-white px-4 py-1 rounded" onclick="deleteProduct(${index})">Delete</button>
        </td>`;

    productTableBody.appendChild(row);
  });
}

//edit product
const editProduct = function (index) {
  const product = products[index];
  document.getElementById('productId').value = index;
  document.getElementById("productName").value = product.name;
  document.getElementById("productQuantity").value = product.quantity;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productVendor").value = product.vendor;
  document.getElementById("productCategory").value = product.category;
  productIndex = index;

};

//delete product
const deleteProduct = function (index) {
  products.splice(index, 1);
  renderProducts();
};

// Render initial products
renderProducts();