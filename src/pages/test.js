import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import logo from "../images/im2.jpg";
import CreatableSelect from "react-select/creatable";
import chroma from "chroma-js";

const colors = [
  "#FCA5A5",
  "#6EE7B7",
  "#93C5FD",
  "#FCD34D",
  "#C4B5FD",
  "#F9A8D4",
  "#10B981",
  "#6B7280",
  "#92400E",
  "#1E3A8A",
];
function findcolor() {
  var theRandomNumber = Math.floor(Math.random() * 10) + 1;
  return colors[theRandomNumber];
}

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "White" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = "#FBBF24";
    return {
      ...styles,
      backgroundColor: "#F9FAFB",
      color: "#111827",
    };
  },
  multiValue: (styles, { data }) => {
    const color = "#FEF3C7";
    return {
      ...styles,
      backgroundColor: findcolor(),
      color: "#EFF6FF",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#F9FAFB",
  }),
  //   multiValueRemove: (styles, { data }) => ({
  //     ...styles,
  //     color: "#F9FAFB",
  //     ":hover": {
  //       backgroundColor: "#B91C1C",
  //       color: "#F9FAFB",
  //     },
  //   }),
};

const Test = () => {
  const [selectedValues, setselected] = useState([]);
  const options1 = [
    {
      value: "chocolate",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img style={{ marginRight: "10px" }} src={logo} />{" "}
          <span>chocolate</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "strawberry",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} />
          <span>c</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "vanilla",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} /> <span>va</span>
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "chocolate",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img style={{ marginRight: "10px" }} src={logo} />{" "}
          <span>chocolate</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "strawberry",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} />
          <span>c</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "vanilla",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} /> <span>va</span>
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "chocolate",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img style={{ marginRight: "10px" }} src={logo} />{" "}
          <span>chocolate</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "strawberry",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} />
          <span>c</span>{" "}
        </div>
      ),
      color: "#5B21B6",
    },
    {
      value: "vanilla",
      label: (
        <div style={{ display: "flex", height: "20px" }}>
          <img src={logo} /> <span>va</span>
        </div>
      ),
      color: "#5B21B6",
    },
  ];

  const options = [{ value: "chocolate", label: "1", icon: logo }];

  const handleChange = (selectedOption) => {
    setselected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const selectOption = (data) => {
    let optionsArr = [];
    data.forEach(function (item, index) {
      //   console.log(data.value);
      let option = {};
      option = {
        value: item.value,
        label: item.label,
        icon: item.icon,
      };
      optionsArr.push(option);
    });

    return optionsArr;
  };

  return (
    <div style={{ width: "50%" }}>
      {/* <Select
        isMulti
        value={selectedValues}
        onChange={handleChange}
        options={selectOption(options1)}
      /> */}

      <CreatableSelect
        isMulti
        value={selectedValues}
        onChange={handleChange}
        styles={colourStyles}
        options={selectOption(options1)}
      />
    </div>
  );
};

export default Test;
