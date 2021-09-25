import { useState } from "react";

import { UserForm, CardList } from "..";
import "./index.css";

export const App = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <UserForm onSetCards={setCards} />
      <CardList cards={cards} onSetCards={setCards} />
    </div>
  );
};
