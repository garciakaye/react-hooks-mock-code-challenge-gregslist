import React, { useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {search} ) {
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setItems(items))
  }, []);

  function handleDeleteItem(deletedItem) {
      const updatedItems = items.filter((item) => item.id !== deletedItem.id);
      setItems(updatedItems)
  }

  const filteredItems = items.filter(item => {
    return item.description.toLowerCase().includes(search.toLowerCase())
  })

  

  return (
    <main>
      <ul className="cards">
        {filteredItems.map((item) => (
          <ListingCard key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
