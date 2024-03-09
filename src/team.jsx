import { useState } from 'react';

export default function Team() {
  const [team, setTeam] = useState(11);
  function handelTeamAdd() {
    const newPlyer = team + 1;
    setTeam(newPlyer);
  }
  function handelRemove() {
    const removePlyer = team - 1;
    setTeam(removePlyer);
  }

  const teamStyle = {
    border: '2px solid red',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
  };
  return (
    <div style={teamStyle}>
      <h2>Plyer :{team} </h2>
      <button onClick={handelTeamAdd}>ADD PLYER</button>
      <button onClick={handelRemove}>ADD PLYER</button>
    </div>
  );
}
