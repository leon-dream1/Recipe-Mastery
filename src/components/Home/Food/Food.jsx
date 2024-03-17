import PropTypes from "prop-types";

import timer from "../../../../public/images/time.png";
import calorie from "../../../../public/images/calorie.png";

const Food = ({ food, handleSelectedFood }) => {
  const {
    calories,
    ingredients,
    preparing_time,
    // recipe_id,
    recipe_image,
    recipe_name,
    short_description,
  } = food;



  return (
    <div className="bg-white border border-[#28282833] rounded-[16px] p-6">
      <div className="div">
        <img
          src={recipe_image}
          alt={recipe_name}
          className="w-[100%] mx-auto rounded-2xl mb-6"
        />
        <h4 className="text-[#282828] text-xl font-semibold mb-4">
          {recipe_name}
        </h4>
        <p className="text-[#878787] text-[16px] font-normal pb-[20px] border-b border-[#2828281A]">
          {short_description}
        </p>

        <p className="pt-[20px] text-[#282828] text-[18px] font-medium pb-[16px]">
          Ingredients: {ingredients.length}
        </p>
        <div className="border-b border-[#2828281A] pb-[20px]">
          {ingredients.map((ingredient, idx) => (
            <li
              className="text-[#878787] text-[18px] font-normal leading-8"
              key={idx}
            >
              {ingredient}li
            </li>
          ))}
        </div>
        <div className="flex gap-8 my-6">
          <div className="flex gap-2">
            <img src={timer} alt="timer" />
            <span className="text-[#282828CC] font-normal text-[16px]">
              {preparing_time} minutes
            </span>
          </div>
          <div className="flex gap-2">
            <img src={calorie} alt="calorie" />
            <span className="text-[#282828CC] font-normal text-[16px]">
              {calories} calories
            </span>
          </div>
        </div>
        <button 
        onClick={() => handleSelectedFood(food)}
        className="px-[25px] py-[15px] rounded-[50px] bg-[#0BE58A] text-xl text-[#150B2B] font-semibold">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object,
  handleSelectedFood: PropTypes.func
};

export default Food;
