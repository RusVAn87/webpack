export const searchFilters = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const priceFilterMin = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price >= value
    })
}

export const priceFilterMax = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price <= value
    })
}