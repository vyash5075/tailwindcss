import React from "react";
import { DateRangePicker } from "react-date-range";

const testdatepick = () => {
  function handleSelect(ranges) {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div>
      {" "}
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <ReactMultiSelectCheckboxes onChange={fetchdata} options={options} />
    </div>
  );
};

export default testdatepick;
