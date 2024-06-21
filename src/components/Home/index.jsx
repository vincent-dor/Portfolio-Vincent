import { useState, useEffect } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({ titres: [], description: "" });
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur de chargement du fichier JSON:", error));
  }, []);

  useEffect(() => {
    if (data.titres.length > 0) {
      const interval = setInterval(() => {
        setIsSlidingOut(true);

        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % data.titres.length);
          setIsSlidingOut(false);
        }, 500); // Correspond à la durée de l'animation de slideOut
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data.titres]);

  if (data.titres.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <section>
      <div className="home__container">
        <div className="home__title">
          <h1>Développeur</h1>
          <span className={`home__transition ${isSlidingOut ? "slide-out" : ""}`}>
            {data.titres[index]}
          </span>
        </div>
        <div className="home__content">
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
