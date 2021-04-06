import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

// tours api
const url = "https://course-api.com/react-tours-project";

function App() {
  // loading hook
  const [isLoading, setIsLoading] = useState(true);
  // tours hook
  const [tours, setTours] = useState([]);

  // getting data from tours api
  const getTours = async () => {
    setIsLoading(true);
    // console.log("loading: ", isLoading);

    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
    console.log("tours: ", tours);
  };

  useEffect(() => {
    getTours();
  }, []);

  // if loading is true then loading will visible
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // Returning all the tours list
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
