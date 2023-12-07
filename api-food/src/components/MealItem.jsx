import NotFound from "./NotFound";

const MealItem = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        <NotFound />
      ) : (
        data.map(item => {
          return (
            <div className="card" key={item.idMeal}>
              <img src={item.strMealThumb} alt="not available" />
              <h3>{item.strMeal}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default MealItem;
