import React from "react";

function Product() {
    // Untuk menampilkan data menggunakan map, kita bisa menggunakan cara seperti ini: (Step 1)
    // const products = ["Asus", "Acer", "Lenovo"];

        // Untuk menampilkan data menggunakan map, kita bisa menggunakan cara seperti ini: (Step 2)
    // const displayProduct = products.map((product) => (
    //     <div key={product}>{product}</div>
    // ));
    // return <div>{displayProduct}</div>;

    const products = [
        { id : "P001", nama : "Asus", harga : 8000000, img : "Img/asus.jpg", desc : "Laptop Gaming" },
        { id : "P002", nama : "Acer", harga : 9000000, img : "Img/acer.jpg", desc : "Laptop Gaming" },
        { id : "P003", nama : "Lenovo", harga : 10000000, img : "Img/lenovo.jpg", desc : "Laptop Gaming" }
    ]

    return (
        <table border="1" width="75%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Img</th>
                    <th>Desc</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && 
                    products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nama}</td>
                            <td>{product.harga}</td>
                            <td><img src={product.img} alt={product.nama} width="100px" /></td>
                            <td>{product.desc}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
export default Product;