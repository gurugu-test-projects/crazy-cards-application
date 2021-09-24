import useAsyncEffect from "use-async-effect";
import axios from "axios";
import './App.css';

export const App = () => {
  useAsyncEffect(async (isMounted) => {
    const getData = async () => {
      return await axios.get("http://localhost:3001/posts");
    };

    try {
      const res = await getData();

      if (!isMounted) {
        return;
      }

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      The App
    </div>
  );
}