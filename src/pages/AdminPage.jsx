import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { Context } from "src/services/context";
import { getAllBands, getAllProduct, getAllCategories, getAllGenres } from "src/services/http-commons";
import { Input } from "src/components/ui/input";
const AdminPage = () => {
    const [selectedCrud, setSelectedCrud] = useState("");
    const [crudContent, setCrudContent] = useState(null);

    const fetchData = async (endpoint) => {
        const response = await endpoint();
        if (response) {
            if (endpoint === getAllBands) {
                const bands = response.data;
                setCrudContent(
                    <div>
                        <h2>Band Management</h2>
                        {bands.map(band => (
                            <div key={band.id}>
                                <h3>Band ID: {band.id}</h3>
                                <p>Name: {band.name}</p>
                                <ul>
                                    <li>Genres:</li>
                                    {band.genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                    {!band.genres.length ? <p>Nenhum genero encontrado</p> : null}
                                </ul>
                                <ul>
                                    <li>Products:</li>
                                    {band.products.map(product => (
                                        <li key={product.id}>{product.name}</li>
                                    ))}
                                    {!band.products.length ? <p>Nenhum produto encontrado</p> : null}
                                </ul>
                            </div>
                        ))}
                        {!bands.length ? <p>Nenhuma banda encontrada</p> : null}
                    </div>
                );
            } else if (endpoint === getAllProduct) {

                const products = response.data;
                setCrudContent(
                    <div>
                        <h2>Product Management</h2>
                        {products.map(product => (
                            <div key={product.id}>
                                <h3>Product ID: {product.id}</h3>
                                <p>Name: {product.name}</p>
                            </div>
                        ))}
                        {!products.length ? <p>Nenhum produto encontrado</p> : null}
                    </div>
                );
            } else if (endpoint === getAllCategories) {
                const categories = response.data;
                setCrudContent(
                    <div>
                        <h2>Category Management</h2>
                        {categories.map(category => (
                            <div key={category.id}>
                                <h3>Category ID: {category.id}</h3>
                                <p>Name: {category.name}</p>
                            </div>
                        ))}
                        {!categories.length ? <p>Nenhuma categoria encontrada</p> : null}
                    </div>
                );
            } else if (endpoint === getAllGenres) {
                const genres = response.data;
                setCrudContent(
                    <div>
                        <h2>Genre Management</h2>
                        {genres.map(genre => (
                            <div key={genre.id}>
                                <h3>Genre ID: {genre.id}</h3>
                                <p>Name: {genre.name}</p>
                            </div>
                        ))}
                        {!genres.length ? <p>Nenhum genero encontrado</p> : null}
                    </div>
                );
            }
        }
    };
    useEffect(() => {
        if (selectedCrud === "products") {
            fetchData(getAllProduct);
        } else if (selectedCrud === "bands") {
            fetchData(getAllBands);
        } else if (selectedCrud === "genres") {
            fetchData(getAllGenres);
        } else if (selectedCrud === "categories") {
            fetchData(getAllCategories);
        }
    }, [selectedCrud]);

    const handleButtonClick = (crud) => {
        setSelectedCrud(crud);
    }

    return (
        <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-center">
            <div className="flex flex-wrap gap-2">
                <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("products")}>
                    Manage Products
                </Button>
                <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("bands")}>
                    Manage Bands
                </Button>
                <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("genres")}>
                    Manage Genres
                </Button>
                <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("categories")}>
                    Manage Categories
                </Button>
            </div>

            {/* Render the selected CRUD content */}
            {crudContent}
        </div>
    );
};

export default AdminPage;