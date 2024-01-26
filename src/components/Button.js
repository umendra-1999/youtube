import React from "react";

import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <Link to={"search?q" + name}>
        <button className="bg-gray-200 m-2 px-2 py-1 font-semibold rounded-xl max-sm:hidden">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
