import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStr = apiBreeds.map(({ name }) => name);
      console.log(breedStr);
      setBreeds(breedStr);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;