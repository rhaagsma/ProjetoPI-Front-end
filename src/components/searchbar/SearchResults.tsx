import {useState} from "react";
import React from "react";

export default function SearchResults() {

    const [items, setItems] = useState(["title"])
    const [filtered, setFiltered] = useState([""])
    return (
        <div className="SearchResults-container">
            {filtered.map(item => (
                <div className="search-item">
                    <h3>{items}</h3>

                </div>
            ))

            }
        </div>
    );
}