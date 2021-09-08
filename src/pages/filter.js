import React, { useState, useEffect } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import moment from "moment";
import { DateRangePicker } from "react-date-range";
const Filter = () => {
  const [a, seta] = useState(false);
  const [daterange, setDateRange] = useState("date");

  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const options = [
    { label: "Thing 1", value: 1 },
    { label: "Thing 2", value: 2 },
  ];
  const toggler = () => seta(!a);

  function handleSelect(ranges) {
    setdate({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
    console.log(ranges.selection.end);
    setDateRange(ranges.selection.startDate);
    //seta(!a);
  }

  function handleSelectDateRange(item) {
    console.log("item", item);
    let startDate = moment(item.selection.startDate).format("YYYY-MM-DD");
    let endDate = moment(item.selection.endDate).format("YYYY-MM-DD");
    console.log(startDate);
    setdate({
      startDate,
      endDate,
    });

    // if (startDate === endDate) {
    //   endDate = moment(item.selection.endDate).add(1, "d");
    //   endDate = endDate.format("YYYY-MM-DD");
    // }
    // if (startDate && endDate) {
    //   this.redirectToNewFilterURL(`${startDate},${endDate}`, `range`);
    // }
    // if (window.amplitude) {
    //   window.amplitude.getInstance().logEvent("analytics_filter_by_date");
    // }
    // this.setState({ selectionRange: [item.selection] });
  }

  const selectionRange = {
    startDate: date.startDate,
    endDate: date.endDate,
    key: "selection",
  };

  const yash = (e) => {
    console.log(e.target.value);
  };

  const fetchdata = (e) => {
    console.log(e);
  };
  return (
    <>
      <button className="border border-gray-300 px-2" onClick={toggler}>
        {date.startDate}
      </button>
      {/* {a && (
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={(range) => handleSelectDateRange(range)}
        />
      )} */}
      <ReactMultiSelectCheckboxes onChange={fetchdata} options={options} />
    </>
  );
};

export default Filter;
