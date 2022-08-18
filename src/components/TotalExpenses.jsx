import { useState } from "react";
import "../styles/totalExpenses.css";

const initialFoodExpense = 220;
const initialShoppingExpense = 180;
const initialMoviesExpense = 102.5;

const TotalExpenses = () => {
  const [food, setFood] = useState(initialFoodExpense);
  const [shopping, setShopping] = useState(initialShoppingExpense);
  const [movies, setMovies] = useState(initialMoviesExpense);

  let total = Number(food) + Number(shopping) + Number(movies);

  const handleFood = (e) => {
    let foodPrice = e.target.value;
    setFood(() => {
      if (foodPrice === 0) return "";
      else return foodPrice;
    });
  };
  const handleShopping = (e) => {
    let shoppingPrice = e.target.value;
    setShopping(() => {
      if (shoppingPrice === 0) return "";
      else return shoppingPrice;
    });
  };
  const handleMovies = (e) => {
    let moviesPrice = e.target.value;
    setMovies(() => {
      if (moviesPrice === 0) return "";
      else return moviesPrice;
    });
  };

  return (
    <>
      <div className="value-container">
        <h2>Type here...</h2>
        <input
          className="form-control food-inp"
          type="number"
          placeholder="food"
          onChange={handleFood}
          value={food}
        />
        <input
          className="form-control shopping-inp"
          type="number"
          placeholder="shopping"
          onChange={handleShopping}
          value={shopping}
        />
        <input
          className="form-control movies-inp"
          type="number"
          placeholder="movies"
          onChange={handleMovies}
          value={movies}
        />
      </div>

      <div className="card-container">
        <div className="top-sec">
          <h5 className="title">Your total spend</h5>
          <div className="form-group">
            <label>
              <select
                className="form-select shadow-none"
                aria-label="Default select example"
              >
                <option selected>this month</option>
                <option>June</option>
                <option>July</option>
              </select>
            </label>
          </div>
          <div className="line-icon"></div>
        </div>
        <div className="middle-sec">
          <span className="currency">SAR</span>
          <span className="price">{total}</span>
        </div>
        <div className="bottom-sec">
          <div className="percentage-bar">
            <div className="food" style={{ width: `${food * 100}%` }}></div>
            <div
              className="shopping"
              style={{ width: `${shopping * 100}%` }}
            ></div>
            <div className="movies" style={{ width: `${movies * 100}%` }}></div>
          </div>
          <div className="items">
            <div>
              <div className="round-icon food"></div>
              <span>Food</span>
            </div>
            <div>
              <div className="round-icon shopping"></div>
              <span>Shopping</span>
            </div>
            <div>
              <div className="round-icon movies"></div>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalExpenses;
