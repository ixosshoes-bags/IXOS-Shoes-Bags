import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { categoryImages } from "./CommonComponent";
import "./style/HomePage.css";
import "./style/App.css";

function GenderPage() {
  const [shoes, setShoes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { gender } = useParams();

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoesCollection = collection(db, "shoes");
        const shoesQuery = query(shoesCollection, orderBy("timestamp", "desc"));
        const shoesSnapshot = await getDocs(shoesQuery);

        const shoesList = shoesSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((shoe) =>
            gender === "Girls"
              ? shoe.gender === "Girls" || shoe.gender === "Boys & Girls"
              : gender === "Boys"
              ? shoe.gender === "Boys" || shoe.gender === "Boys & Girls"
              : shoe.gender === gender
          );

        setShoes(shoesList);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();
  }, [gender]);

  const groupedShoesByCategory = shoes.reduce((acc, shoe) => {
    const { category } = shoe;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(shoe);
    return acc;
  }, {});

  const genderSpecificImages = categoryImages[gender] || [];

  return (
    <div className="gender-page">
      <SearchBar />
      <div className="App">
        <h2 className="gender-title">{gender}</h2>

        <div className="category-image-row">
          {genderSpecificImages.map(({ category, image }) => (
            <div
              key={category}
              className={`category-card ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <img src={image} alt={category} className="category-image" />
              <p className="category-label">{category}</p>
            </div>
          ))}
        </div>

        <div className="gender-section">
          <h3>
            {selectedCategory
              ? `Showing Shoes for: ${selectedCategory}`
              : "Select a Category to See Shoes"}
          </h3>
          {selectedCategory && groupedShoesByCategory[selectedCategory] ? (
            <div className="category-row">
              {groupedShoesByCategory[selectedCategory].map((shoe) => (
                <div key={shoe.id} className="shoe-card">
                  <img
                    src={shoe.link}
                    alt={shoe.caption + " " + shoe.gender}
                    title={shoe.caption + " " + shoe.gender}
                  />
                  <div className="shoe-info">
                    <h3>{shoe.caption}</h3>
                    <p>{shoe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory ? (
            <p>No shoes available in this category at the moment.</p>
          ) : null}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GenderPage;
