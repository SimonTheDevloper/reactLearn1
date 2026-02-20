import { useState } from "react";
import Person from "./Person.jsx";

function Project3() {
  const persons = [
    //these mock-data are AI generated
    {
      name: "Alice",
      age: 25,
      hasDriversLicence: true,
      description: "Loves traveling and exploring new cities.",
    },
    {
      name: "Bob",
      age: 30,
      hasDriversLicence: false,
      description: "Enjoys reading books and quiet evenings.",
    },
    {
      name: "Charlie",
      age: 22,
      hasDriversLicence: true,
      description: "Computer science student who likes coding.",
    },
    {
      name: "Lola",
      age: 20,
      hasDriversLicence: true,
      description: "Creative person who enjoys drawing and design.",
    },
    {
      name: "Tom",
      age: 3,
      hasDriversLicence: false,
      description: "Very curious and loves playing with toys.",
    },
    {
      name: "Mia",
      age: 28,
      hasDriversLicence: true,
      description: "Fitness enthusiast and morning runner.",
    },
    {
      name: "Max",
      age: 35,
      hasDriversLicence: true,
      description: "Works as an engineer and likes problem solving.",
    },
    {
      name: "Nina",
      age: 19,
      hasDriversLicence: false,
      description: "Student who enjoys photography and music.",
    },
    {
      name: "Leo",
      age: 40,
      hasDriversLicence: true,
      description: "Family person who likes cooking for others.",
    },
    {
      name: "Sophia",
      age: 26,
      hasDriversLicence: true,
      description: "Interested in psychology and personal growth.",
    },
    {
      name: "Ethan",
      age: 33,
      hasDriversLicence: false,
      description: "Freelancer who works remotely and travels.",
    },
    {
      name: "Emma",
      age: 21,
      hasDriversLicence: true,
      description: "University student who likes learning new things.",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(i) {
    setSelectedCard(selectedCard === i ? null : i); // damit man toggeln kann wenn die karte wo drauf gedrück schon der index ist dann setzte wieder auf null
  }
  return (
    <>
      <div>
        {persons.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            hasDriversLicence={person.hasDriversLicence}
            selected={selectedCard === index}
            onClick={() => handleCardClick(index)}
            description={person.description}
          />
        ))}
      </div>
    </>
  );
}
export default Project3;
