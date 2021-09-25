import { useState } from "react";
// import useAsyncEffect from "use-async-effect";
// import axios from "axios";

import { UserForm, CardList } from "..";
import "./index.css";

export const App = () => {
  const [cards, setCards] = useState([]);

  // useAsyncEffect(async (isMounted) => {
  //   const getData = async () => {
  //     return await axios.get(
  //       "http://localhost:3001/cards?req.employment=student&req={}"
  //     );
  //   };

  //   try {
  //     const res = await getData();

  //     if (!isMounted) {
  //       return;
  //     }

  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  return (
    <div className="App">
      <UserForm onSetCards={setCards} />
      <CardList cards={cards} onSetCards={setCards} />
    </div>
  );
};
