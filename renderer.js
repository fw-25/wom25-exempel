/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

function listProducts(products) {
    for (prod of products) {
        document.getElementById('products').innerHTML += `<li id="prod-${prod.id}">${prod.name}</li>`
    }
}

async function getProduct(id) {
    product = await window.exposed.getProductInfo(id)
    console.log(product)
}

(async() => {

    // Run a function that gets data from main.js
    console.log(await window.exposed.getStuffFromMain())
    
    // Run a function sends data to main.js
    await window.exposed.sendStuffToMain('Stuff from renderer')

    // hämta produkterna från main via preload
    listProducts(await window.exposed.getProducts())
})()

