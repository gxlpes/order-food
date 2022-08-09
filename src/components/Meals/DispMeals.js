import { DispMealsSection } from "./Styles/DispMealsStyles";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Feijoada",
    description: "The best feijoada in the world.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pão de queijo",
    description: "The mineiro way!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Brazilian Barbecue",
    description: "Brazilian beef/meat prepared in a special way.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Caipirinha",
    description: "Healthy and green.",
    price: 18.99,
  },
];

const DispMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem // forwading data via props
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <DispMealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </DispMealsSection>
  );
};

export default DispMeals;
