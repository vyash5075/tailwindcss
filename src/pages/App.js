import React from "react";
import { MultiSelectCheckBox } from "multi-select-checkbox/dist/MultiSelectCheckBox";

const App = () => {
  const CheckBoxList = [
    {
      label: "eat",
      value: "eat",
    },
    {
      label: "sleep",
      value: "sleep",
    },
    {
      label: "coding",
      value: "coding",
    },
    {
      label: "Repeat",
      value: "Repeat",
    },
    {
      label: "Reapeat again!",
      value: "Reapeat again!",
    },
    {
      label: "Reapeat again again!",
      value: "Reapeat again again!",
    },
  ];
  const [selectedValue, setSelectedValue] = React.useState([]);
  console.log(selectedValue);
  return (
    <div className="border border-gray-500 w-44 ">
      {/* <p>{JSON.stringify(selectedValue, null, 2)}</p> */}
      <div>
        <MultiSelectCheckBox
          selectAllShow={true}
          selectedCheckBox={[
            {
              label: "eat",
              value: "eat",
            },
          ]}
          searchLabelName="Search : "
          searchLabelClassName="searchLabelClassName"
          searchFilterParentDivClassName="searchFilterParentDivClassName"
          searchFilterClassName="searchFilterClassName"
          searchPlaceHolderName="Search Here..."
          showSearchBox={true}
          selectAllClassLabelName="select_all_label_class_name"
          listOfCheckBoxItemsLabelClassName="list_of_checkbox_item_label_class_name"
          selectAllParentDivClassName="selectAllParentDivClassName"
          listOfAllCheckBoxParentDivClassName="listOfAllCheckBoxParentDivClassName"
          selectAllShowClassName="select_all_checkbox_classname"
          listOfCheckBoxItemsClassName="list_of_all_checkbox_classname"
          CheckBoxList={CheckBoxList}
          selectAllLabelName="Select All..."
          onChange={function (item) {
            //  get All list of selected Item....
            setSelectedValue(item);
          }}
        />
      </div>
    </div>
  );
};

export default App;
