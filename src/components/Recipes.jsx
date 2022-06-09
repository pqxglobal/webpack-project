import { useState } from "react";

const Level = {
  Communication: 1,
  ProcessTemp: 130,
};

const Flow = {
  ...Level,
  MaxPressure: 100,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Measurements:</h3>
      <div class="buttons">
        <button onClick={() => setRecipe(Level)}>Level Measurement</button>
        <button onClick={() => setRecipe(Flow)}>Flow Measurement</button>
      </div>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
