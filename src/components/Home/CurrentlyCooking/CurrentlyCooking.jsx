import PropTypes from "prop-types";

const CurrentlyCooking = ({currentlyCooking}) => {
  return (
    <div className="">
      <h2 className=" text-[#282828] text-[24px] font-semibold text-center pb-2 border-b border-[#2828281A]">
        Want to Cook: {currentlyCooking.length}
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
