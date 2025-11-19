import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryFilter, priceFilterMin, priceFilterMax } from "./filters";


const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');
    const catalogMinPrice = document.getElementById('min');
    const catalogMaxPrice = document.getElementById('max');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            catalogModal.style.display = 'flex';
        } else {
            catalogModal.style.display = 'none';
        }
    })

    catalogModalItems.forEach((item) => {

        item.addEventListener('click', () => {
            const text = item.textContent
            getData().then(data => {
                renderGoods(categoryFilter(data, text));
            })
        })
    })

    catalogMinPrice.addEventListener('input', (event) => {
        const min = event.target.value;
        getData().then(data => {
            renderGoods(priceFilterMin(data, min));
        })

    })

    catalogMaxPrice.addEventListener('input', (event) => {
        const min = event.target.value;
        getData().then(data => {
            renderGoods(priceFilterMax(data, min));
        })

    })



}
export default catalog