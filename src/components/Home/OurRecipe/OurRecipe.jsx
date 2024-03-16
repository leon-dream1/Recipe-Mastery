import { useState } from "react";
import { useEffect } from "react";
import Food from "../Food/Food";
import CookingTable from "../CookingTable/CookingTable";

const OurRecipe = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const [selectedFood, setSelectedFood] = useState([]);

  const handleSelectedFood = (food) => {
    const newFood = [...selectedFood, food];
    setSelectedFood(newFood);
  };
  console.log(selectedFood);

  return (
    <div className="container mx-auto my-[100px]">
      <h4 className="text-[#150B2B] text-[40px] font-semibold text-center mb-6">
        Our Recipes
      </h4>
      <p className="w-[70%] mx-auto text-center text-[#150B2B99] text-[16px] font-normal">
        Explore our diverse selection of recipes, featuring vibrant images,
        detailed ingredients lists, and helpful cooking tips. Whether you are
        cooking for a special occasion or simply craving a delicious homemade
        meal, our recipe section is your go-to destination for culinary
        inspiration.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-[48px]">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-6">
            {foods.map((food) => (
              <Food
                key={food.recipe_id}
                food={food}
                handleSelectedFood={handleSelectedFood}
              />
            ))}
          </div>
        </div>
        <div className="">
          <CookingTable selectedFood={selectedFood}/>
        </div>
      </div>
    </div>
  );
};

export default OurRecipe;
