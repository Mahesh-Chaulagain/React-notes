import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from the JSONPlaceholder API
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setItems(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
            <h2> Item list</h2>
            <ul>
                {/* Map through the items and render list items */}
                {items.map(item => (
                    <li key={item.id}>
                        name:{item.name}
                        <br />
                        website:{item.website}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
