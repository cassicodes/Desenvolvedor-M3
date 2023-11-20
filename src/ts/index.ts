import { Product } from "./Product";

const serverUrl = "http://localhost:5000";

function main() {
  console.log(serverUrl);
}

async function fetchProducts() {
  const response = await fetch("http://localhost:5000/products")

  const responseJson = await response.json();

  return responseJson;
}

function insertProducts(products: any[]) {
  const productShelf = document.querySelector('.products')

  if (!productShelf) return

  products.forEach(product => {
    const productCard = mountProductCard(product)

    productShelf.insertAdjacentHTML('beforeend', productCard)
  })
}

function mountProductCard(productInfos: any) {
  return `
  <div class="product__shelf">
              <img src="${productInfos.image}" alt="" class="product__image">
              <span class="product__name">
                ${productInfos.name}
              </span>
              <div class="product__price">
                <span class="product__list-price">
                  R$ ${productInfos.price}
                </span>
                <span class="product__installments">
                  até ${productInfos.parcelamento[0]}x de R$ ${productInfos.parcelamento[1]}
                </span>
              </div>
              <button class="add-to-cart">
                COMPRAR
              </button>
            </div>
  `
}

fetchProducts()
  .then(products => {
    insertProducts(products);
  })
  .catch(error => {
    console.error('Erro durante a solicitação:', error);
  });

const filterModal = document.querySelector('.filter__modal') as HTMLElement
const sortModal = document.querySelector('.sort__modal') as HTMLElement
const body = document.body

function handleOpenFilterModal() {
  const openFilterModal = document.querySelector('.filter__button');
  openFilterModal.addEventListener('click', function () {
    filterModal.classList.add('filter__modal--open')
    body.classList.add('scrollBlocked')
  })
}

function handleOpenSortModal() {
  const openSortModal = document.querySelector('.sort__button');
  openSortModal.addEventListener('click', function () {
    sortModal.classList.add('sort__modal--open')
    body.classList.add('scrollBlocked')
  })
}

function handleCloseModal() {
  const closeModalIcon = document.querySelectorAll('.close__modal')

  closeModalIcon.forEach(function (closeModal) {
    closeModal.addEventListener('click', function () {
      filterModal.classList.remove('filter__modal--open')
      sortModal.classList.remove('sort__modal--open')
      body.classList.remove('scrollBlocked')
    })
  })
}

function handleToggleColorCategory() {

  const openColorCategory = document.querySelector('.option__color');
  const colorCategoryContent = document.querySelector('.filter__color');

  openColorCategory.addEventListener('click', function () {
    colorCategoryContent.classList.toggle('filter__color--open');
  });
}

function handleToggleSizeCategory() {

  const openSizeCategory = document.querySelector('.option__size');
  const sizeCategoryContent = document.querySelector('.filter__size')

  openSizeCategory.addEventListener('click', function () {
    sizeCategoryContent.classList.toggle('filter__size--open');
  });
}

function handleTogglePriceCategory() {
  const openPriceCategory = document.querySelector('.option__price');
  const priceCategoryContent = document.querySelector('.filter__price')

  openPriceCategory.addEventListener('click', function () {
    priceCategoryContent.classList.toggle('filter__size--open');
  });
}

function handleShowMore() {
  const showMore = document.querySelector('.search__show-more');
  const showMorecontent = document.querySelector('.products')

  showMore.addEventListener('click', function () {
    showMorecontent.classList.toggle('active');
  });
}

function handleOpenOrderByDropdown() {
  const openOrderByDropdown = document.querySelector('.orderBy__button');
  const orderByDropdownOpened = document.querySelector('.orderBy__options')

  openOrderByDropdown.addEventListener('click', function () {
    orderByDropdownOpened.classList.toggle('active');
  });
}

handleOpenFilterModal()
handleOpenSortModal()
handleCloseModal()

handleToggleColorCategory()
handleToggleSizeCategory()
handleTogglePriceCategory()

handleShowMore()
handleOpenOrderByDropdown()