import { useState } from "react";
import data from "./data.js";
import "./styles.css";
// single selection
// multi selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiSelected] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const index = cpyMultiple.indexOf(getCurrentId);

    console.log(index);
    if (index === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(index, 1);

    setMultiSelected(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelect
                    ? multiple.indexOf(dataItem.id) === -1 && (
                        <div className="content">{dataItem.answer}</div>
                    )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                    )
              }
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
