import { useState } from "react";
import Person from "./Person.jsx";

function Project3() {
  let personsData = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      hasDriversLicence: true,
      description: "Loves traveling and exploring new cities.",
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      hasDriversLicence: false,
      description: "Enjoys reading books and quiet evenings.",
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      hasDriversLicence: true,
      description: "Computer science student who likes coding.",
    },
    {
      id: 4,
      name: "Lola",
      age: 20,
      hasDriversLicence: true,
      description: "Creative person who enjoys drawing and design.",
    },
    {
      id: 5,
      name: "Tom",
      age: 3,
      hasDriversLicence: false,
      description: "Very curious and loves playing with toys.",
    },
    {
      id: 6,
      name: "Mia",
      age: 28,
      hasDriversLicence: true,
      description: "Fitness enthusiast and morning runner.",
    },
    {
      id: 7,
      name: "Max",
      age: 35,
      hasDriversLicence: true,
      description: "Works as an engineer and likes problem solving.",
    },
    {
      id: 8,
      name: "Nina",
      age: 19,
      hasDriversLicence: false,
      description: "Student who enjoys photography and music.",
    },
    {
      id: 9,
      name: "Leo",
      age: 40,
      hasDriversLicence: true,
      description: "Family person who likes cooking for others.",
    },
    {
      id: 10,
      name: "Sophia",
      age: 26,
      hasDriversLicence: true,
      description: "Interested in psychology and personal growth.",
    },
    {
      id: 11,
      name: "Ethan",
      age: 33,
      hasDriversLicence: false,
      description: "Freelancer who works remotely and travels.",
    },
    {
      id: 12,
      name: "Emma",
      age: 21,
      hasDriversLicence: true,
      description: "University student who likes learning new things.",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [persons, setPersons] = useState(personsData);

  function handleDescriptionClick(i) {
    setSelectedCard(selectedCard === i ? null : i); // damit man toggeln kann wenn die karte wo drauf gedrück schon der index ist dann setzte wieder auf null
  }
  function handleDelteClick(i) {
    const updatedPersonArr = persons.filter((person) => person.id !== i);
    console.log(updatedPersonArr);
    setPersons(updatedPersonArr);
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
            toggleDescription={() => handleDescriptionClick(index)}
            onDeleteClick={() => handleDelteClick(person.id)}
            description={person.description}
          />
        ))}
      </div>
    </>
  );
}
export default Project3;
