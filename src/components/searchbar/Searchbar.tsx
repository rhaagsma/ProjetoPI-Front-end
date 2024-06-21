import React from "react";
import { useMemo, useState } from "react";
import {FaSearch} from "react-icons/fa";
import  "./Searchbar.css"

export default function SearchBar() {

    const [items, setItems] = useState<string[]>([]);//conect with the database :D
    const [query, setQuery] = useState("")
   
    const filteredItems = useMemo(() => {
        if (!query) return items
        return items.filter((item) =>

            item.toLowerCase().includes(query.toLowerCase())

        );
    
    }, [items, query]);
    return (
        <div className="input-wrapper">
            <FaSearch className="search-icon"/>
            <input value={query} onChange={e => setQuery(e.target.value)}type="text" className="search-input" placeholder="Search"/>
            {filteredItems.map(item => (
                <div className="search-item">
                    <h3>{item}</h3>

                </div>
            ))

            }
        </div>
    );
}