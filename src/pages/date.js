import React, { useState, useEffect } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { DateRangePicker } from "react-date-range";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import "./date.css";
const Datepick = () => {
  const [a, seta] = useState(false);
  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [username, setusername] = useState([]);
  const selectionRange = {
    startDate: date.startDate,
    endDate: date.endDate,
    key: "selection",
  };

  const [buttontext, setbuttontext] = useState(
    `${moment(new Date()).format("YYYY-MM-DD")} to ${moment(new Date()).format(
      "YYYY-MM-DD"
    )}`
  );

  function handleSelect(item) {
    let startDate = moment(item.selection.startDate).format("YYYY-MM-DD");
    let endDate = moment(item.selection.endDate).format("YYYY-MM-DD");

    setdate({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    });
    let s = `${startDate} to ${endDate}`;
    setbuttontext(s);
    seta(!a);
  }
  const options = [
    { label: "Thing 1", value: 1 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
    { label: "Thing 2", value: 2 },
  ];

  const usernamehandler = (e) => {
    console.log("rr", e);
    setusername([...e]);
    setSelectedOption([...e]);
  };

  const cancel = () => {
    console.log("yash");
    setusername([]);
    setSelectedOption([]);
  };

  const setdefaultdate = () => {
    setbuttontext(" select Date Range");
  };
  console.log(username);
  const [showfilter, setshowfilter] = useState(false);
  const toggler = () => seta(!a);

  const [selectedOption, setSelectedOption] = useState([]);

  const difftoast = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      {showfilter ? (
        <div className="flex border border-gray-800 bg-white-300   justify-between  py-1 mx-2 mt-2">
          <div className="flex items-center">
            <div className="flex mr-1  border border-gray-300 bg-white-400 rounded-md items-center ml-2 py-0.5 px-0.5">
              <ReactMultiSelectCheckboxes
                placeholderButtonLabel="Tags..."
                options={options}
                onChange={(e) => usernamehandler(e)}
              />
              <div
                className=" px-1 text-sm   border-l  border-gray-300  py-0.5"
                // onClick={cancel}
              >
                X
              </div>
            </div>{" "}
            <div className="flex mr-1  border border-gray-300 rounded-md items-center  py-0.5 px-0.">
              <ReactMultiSelectCheckboxes
                placeholderButtonLabel="Status..."
                options={options}
                value={selectedOption}
                onChange={(e) => usernamehandler(e)}
              />
              <div
                className=" px-1 text-sm    border-l-2  border-gray-300  py-0.5"
                onClick={cancel}
              >
                X
              </div>
            </div>{" "}
            <div className="flex border border-gray-300 rounded-md items-center mr-1  py-0.5 px-0.5">
              <button className=" px-2 py-1 text-xs" onClick={toggler}>
                {buttontext}
              </button>
              <div
                className=" px-1 text-sm   border-l  border-gray-300  py-0.5"
                onClick={setdefaultdate}
              >
                X
              </div>
            </div>
            <div className="text-sm bg-gray-300 py-0.5 px-2 border border-gray-300 rounded-lg">
              {" "}
              Clear
            </div>
          </div>
          <div
            className="text-xs bg-gray-300 px-2 py-1 mx-3 rounded-3xl"
            onClick={() => setshowfilter(false)}
          >
            X
          </div>
        </div>
      ) : (
        <button onClick={() => setshowfilter(true)}> Filter</button>
      )}

      {a && (
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={(range) => handleSelect(range)}
        />
      )}
      <br></br>
      <button onClick={difftoast}>toast</button>
      <ToastContainer />
    </>
  );
};

export default Datepick;
