import MyImage from "../img/404-food.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="h1-heading">
        Sorry, we dont have recipes with that letter yet.
      </h1>
      <img className="notFound-img" src={MyImage} alt="sin imagen" />
    </div>
  );
};

export default NotFound;
