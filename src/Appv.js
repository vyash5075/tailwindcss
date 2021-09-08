import "./App.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
import DropDown from "./components/dropdown";
import { Switch, Route } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import Test2 from "./pages/test2";
import CreatableSelect from "react-select/creatable";
import LazyLoad from "./pages/lazyload";
import Lazy from "./pages/Lazyloading";
import Img from "./images/im2.jpg";
import Test from "./pages/test";
import Filter from "./pages/filter";
import Checkbox from "./pages/App";
import Date from "./pages/date";
//import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { DateRangePicker } from "react-date-range";
function App() {
  const [value, setValue] = useState([new Date(), new Date()]);

  const [a, seta] = useState(false);
  const onChanged = (v) => {
    setValue([...v]);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  function handleSelect(ranges) {
    console.log(ranges);
  }
  const data = [
    {
      Country: [
        <>
          <img src={Img} /> <span>Japan</span>
        </>,
      ],
      id: 1,
    },
    { Country: "America", id: 2 },
    { Country: "Japan", id: 3 },
    { Country: "new york", id: 4 },
    { Country: "Australia", id: 5 },
  ];
  const [options] = useState(data);

  const [selectedValues, setselected] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  function onSelect(selectedList, selectedItem) {
    setselected(selectedList);
    console.log(selectedValues);
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const select = (val) => {
    console.log(val);
  };

  const toggler = () => seta(!a);
  return (
    // <>
    // {/* <Navbar toggle={toggle}/>
    // <DropDown isOpen={isOpen} toggle={toggle}/>
    //  <Switch>
    //    <Route path="/"exact component={Home}/>
    //    <Route path='/about' exact component ={About}/>
    //    <Route path='/Menu' exact component ={Menu}/>
    //  </Switch>
    // <Footer/> */}
    // </>

    <>
      <Date />
      {/* // <//Filter /> */}
      {/* <Checkbox /> */}
      {/* <div
        style={{
          width: "20%",
          marginLeft: "30px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="App">
          <h3 style={{ color: "red" }}>multiselect dropdown usestate</h3>
          <Multiselect
            style={{ width: "20%" }}
            options={options}
            displayValue={`Country`}
            onSelect={onSelect}
            showArrow
          ></Multiselect>
        </div>
      </div> */}
      {/* <Test />
      <Test2 /> */}
      {/* <LazyLoad /> */}
      {/* <Lazy /> */}
      {/* <DateRangePicker
        showLeadingZeros="true"
        onChange={(value) => onChanged(value)}
        value={value}
      /> */}
      {/* <button onClick={toggler}>press</button>
      {a && (
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      )} */}
    </>
  );
}

export default App;
