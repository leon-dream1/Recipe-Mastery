import { useState } from "react";
import { useEffect } from "react";
import Food from "../Food/Food";
import CookingTable from "../CookingTable/CookingTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const OurRecipe = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const [selectedFood, setSelectedFood] = useState([]);

  const handleSelectedFood = (chooseFood) => {
    const isAlreadySelected = selectedFood.find(
      (food) => food.recipe_id === chooseFood.recipe_id
    );
    if (isAlreadySelected) {
      toast.error("Already Selected");
    } else {
      const newFood = [...selectedFood, chooseFood];
      setSelectedFood(newFood);
      toast.success("Successfully Added!");
    }
  };

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handlePreparing = (prepareFood) => {
    console.log("prepare",prepareFood);
    const newCurrentlyCookingFood = [ ...currentlyCooking, prepareFood ];
    setCurrentlyCooking(newCurrentlyCookingFood);

    const remainingSelectedFood = selectedFood.filter((food) => food.recipe_id !== prepareFood.recipe_id);
    console.log("remaining",remainingSelectedFood);
    setSelectedFood(remainingSelectedFood);
  };

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
          <CookingTable
            selectedFood={selectedFood}
            currentlyCooking={currentlyCooking}
            handlePreparing={handlePreparing}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OurRecipe;
