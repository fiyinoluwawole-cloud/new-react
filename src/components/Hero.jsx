import React, {useState} from "react";
import "../styles/hero.css";


const Hero = () => {

  const [name] = useState(["Testy"])
  return (
    <div className="hero">
      <div>
        {name.map((names) => (
          <div>
            {names}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;