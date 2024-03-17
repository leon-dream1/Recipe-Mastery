import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentlyCooking }) => {
  console.log(currentlyCooking);

  const totalTime = currentlyCooking.reduce(
    (prev, current) => prev + current.preparing_time,
    0
  );

  const totalCalories = currentlyCooking.reduce(
    (prev, current) => prev + current.calories,
    0
  );
  return (
    <div className="mt-12">
      <h2 className=" text-[#282828] text-[24px] font-semibold text-center pb-2 border-b border-[#2828281A]">
        Currently Cooking: {currentlyCooking.length}
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
            {currentlyCooking.map((food, idx) => (
              <tr key={food.recipe_id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{food.recipe_name}</td>
                <td>{food.preparing_time} min</td>
                <td>{food.calories} calories</td>
              </tr>
            ))}
            <tr className="">
              <td></td>
              <td></td>
              <td>Total time: {totalTime}</td>
              <td>Total calories: {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentlyCooking: PropTypes.array,
};

export default CurrentlyCooking;
