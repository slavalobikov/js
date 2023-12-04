/*
const productEndPoint = 'https://services.odata.org/Experimental/OData/OData.svc/Products'
const detailsEndPoint = 'https://services.odata.org/Experimental/OData/OData.svc/ProductDetails'

const productPromise = fetch(productEndPoint).then(res => res.json())
const detailsPromise = fetch(detailsEndPoint).then(res => res.json())

const ul = document.getElementById('products')

Promise.all([productPromise, detailsPromise]).then(res => {
    const [{value:products}, {value:details}] = res
    products.sort((a,b) => a.Price - b.Price)


    details.forEach(detail => {
         const indexProduct = products.findIndex(product => product.ID === detail.ProductID)
        products[indexProduct] = {...products[indexProduct] ,...detail}
    })

    products.forEach(product => {
        const productElement = document.createElement('li')
        productElement.innerText = `${product.Name}, ${product.Details ? `${product.Details},` : ''} ${product.Price}$`
        ul.appendChild(productElement)
    })

    console.log('result', products)
})
*/

const productEndPoint = 'https://services.odata.org/Experimental/OData/OData.svc/Products'
const detailsEndPoint = 'https://services.odata.org/Experimental/OData/OData.svc/ProductDetails'
const ul = document.getElementById('products')


const setDataWithAsync = async () => {
    const urls = [productEndPoint, detailsEndPoint]
    const arr = await Promise.all(urls.map(async url => {
        const res = await fetch(url)
        return res.json()
    }))

    const [{value:products}, {value:details}] = arr
    products.sort((a,b) => a.Price - b.Price)


    details.forEach(detail => {
        const indexProduct = products.findIndex(product => product.ID === detail.ProductID)
        products[indexProduct] = {...products[indexProduct] ,...detail}
    })

    products.forEach(product => {
        const productElement = document.createElement('li')
        productElement.innerText = `${product.Name}, ${product.Details ? `${product.Details},` : ''} ${product.Price}$`
        ul.appendChild(productElement)
    })
}

setDataWithAsync()
