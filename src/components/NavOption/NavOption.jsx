import React, { useEffect, useState } from "react";
import "./NavOptions.scss";
import NavCard from "./NavCard/NavCard";

const NavOption = ({
  miphones,
  redmiphones,
  tv,
  laptops,
  fitstyle,
  home,
  radio,
  accessories,
}) => {
  const [miphonesToggles, setMiPhoneToggles] = useState(false);
  const [redmiphonesToggles, setRedmiPhonesToggles] = useState(false);
  const [tvToggles, setTvToggles] = useState(false);
  const [laptopsToggles, setLaptopsToggles] = useState(false);
  const [fitStyleToggles, setFitStyleToggles] = useState(false);
  const [homeToggles, setHomeToggles] = useState(false);
  const [radioToggles, setRadioToggles] = useState(false);
  const [accessoriesToggles, setAccessoriesToggles] = useState(false);


  useEffect(()=>{

    if(window.location.pathname === '/miphones'){
        return setMiPhoneToggles(true)
    }
    if(window.location.pathname === '/redmiphones'){
        return setRedmiPhonesToggles(true)
    }
    if(window.location.pathname === '/tv'){
        return setTvToggles(true)
    }
    if(window.location.pathname === '/laptops'){
        return setLaptopsToggles(true)
    }
    if(window.location.pathname === '/lifestyle'){
        return setFitStyleToggles(true)
    }
    if(window.location.pathname === '/home'){
        return setHomeToggles(true)
    }
    if(window.location.pathname === '/radio'){
        return setRadioToggles(true)
    }
    if(window.location.pathname === '/accessories'){
        return setAccessoriesToggles(true)
    }
  },[])

  return (
    <div className="navoptions">
      {miphonesToggles
        ? miphones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {redmiphonesToggles
        ? redmiphones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvToggles
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptopsToggles
        ? laptops.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitStyleToggles
        ? fitstyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {homeToggles
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {radioToggles
        ? radio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {accessoriesToggles
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOption;
