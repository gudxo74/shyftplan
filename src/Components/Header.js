import React from "react";
import PropTypes from "react-proptypes";
import constants from "../constants/";

  const Header = ({ date }) => (
  <div className="header row flex-middle">

    <div className="col col-center">
      <span>{date.format(constants.headerDateFormat)}</span>
    </div>
    
  </div>
);

export default Header;
