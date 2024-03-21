import PropTypes from "prop-types";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const CookingTable = ({ selectedFood, handlePreparing, currentlyCooking }) => {
  return (
    <div className="bg-white border border-[#28282833] rounded-[16px] py-8">
      <h2 className=" text-[#282828] text-[24px] font-semibold text-center pb-2 border-b border-[#2828281A]">
        Want to Cook: {selectedFood.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {selectedFood.map((food, idx) => (
              <tr key={food.recipe_id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td className="text-[12px]">{food.recipe_name}</td>
                <td>{food.preparing_time} min</td>
                <td>{food.calories} calories</td>
                <button
                  onClick={() => handlePreparing(food)}
                  className="px-1 lg:px-[10px] py-1 lg:py-[10px] rounded-[40px] bg-[#0BE58A] text-[14px] text-[#150B2B] font-semibold"
                >
                  Preparing
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CurrentlyCooking currentlyCooking={currentlyCooking}/>
    </div>
  );
};

CookingTable.propTypes = {
  selectedFood: PropTypes.array,
  handlePreparing: PropTypes.func,
  currentlyCooking: PropTypes.array,
};

export default CookingTable;
