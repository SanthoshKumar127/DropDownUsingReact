import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import { DataSet } from "./Data";

function App() {
  var [selectedTitle, setSelectedTitle] = useState<string | undefined>();
  var [selectedItem, setSelectedItem] = useState<string | undefined>();
  return (
    <div>
      {DataSet.map((option) => (
        <Menu
          menuList={option.list}
          menuTitle={option.menuTitle}
          selectedItem={selectedItem}
          isSelected={selectedTitle === option.menuTitle}
          onLinkClick={function (selectedTitle: string): void {
            setSelectedItem(selectedTitle);
          }}
          onToggleClick={function (selectedMenu: string): void {
            setSelectedTitle(selectedMenu);
          }}
        />
      ))}
    </div>
  );
}

export default App;
