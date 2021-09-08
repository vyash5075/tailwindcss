import React, { Component } from "react";
import chroma from "chroma-js";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
const colourOptions = [
  {
    value: "1",
    label: "Selenium",
    color: "#7ababb",
  },
  {
    value: "2",
    label: "Selenium4",
    color: "#00FF00",
  },
  {
    value: "3",
    label: "Appium",
    color: "#eb7971",
  },
];
const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log("data", data);
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
class Test2 extends Component {
  state = {
    data: {},
  };

  render() {
    return (
      <div className="App">
        <Select
          closeMenuOnSelect={false}
          defaultValue={[colourOptions[0]]}
          isMulti
          options={colourOptions}
          styles={colourStyles}
        />
      </div>
    );
  }
}

export default Test2;
