function fetchProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Product Data Loaded");
        }, 2000);
    });
}
fetchProduct()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("Request completed"));
export {};
