import { faPlus, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getPassengersIcon = (numberOfPassengers) => {
  if (numberOfPassengers < 3)
    return (
      <>
        {Array.from({ length: numberOfPassengers }).map((_e, idx) => (
          <FontAwesomeIcon key={idx} color="#C3CBD7" size="2x" icon={faPerson} />
        ))}
      </>
    );

  return (
    <>
      <FontAwesomeIcon color="#C3CBD7" size="2x" icon={faPerson} />
      <FontAwesomeIcon color="#C3CBD7" size="2x" icon={faPerson} />
      <FontAwesomeIcon color="#C3CBD7" size="sm" icon={faPlus} />
    </>
  );
};
