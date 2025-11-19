const getData = (str) => {
    return fetch(`https://webpack-35e60-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
        .then((response) => {
            return response.json()
        })

    // .then(response => response.json())
    // .then(json => console.log(json))
}

export default getData