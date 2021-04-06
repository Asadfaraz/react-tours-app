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

  // UseEffect Hook
  useEffect(() => {
    getTours();
  }, []);

  // Removing item from list
  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newToursList);
  };

  // *************** Returning Components ****************
  // if loading is true then loading will visible
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // Returning refresh button if tours is empty by removing
  if (tours.length === 0) {
    return (
      <div className="refreshToursDiv">
        <h2>No Tours Left</h2>
        <button
          type="button"
          onClick={() => {
            getTours();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  // Returning all the tours list
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
