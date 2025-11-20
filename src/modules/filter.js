import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter } from "./filters"

const filter = () => {
    const maxInput = document.getElementById('max');
    const minInput = document.getElementById('min');
    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('span.filter-check_checkmark');



    minInput.addEventListener('input', (event) => {
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        })
    })
    maxInput.addEventListener('input', (event) => {
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        })
    })
    checkboxInput.addEventListener('change', (event) => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(hotSaleFilter(data, checkboxInput.checked))
        })
    })
}
export default filter