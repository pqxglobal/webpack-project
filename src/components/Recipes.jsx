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
            <h3>Current Measurement:</h3>
            <button onClick={() => setRecipe(Level)}>Level Measurement</button>
            <button onClick={() => setRecipe(Flow)}>Flow Measurement</button>
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
