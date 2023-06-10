import React, { useState } from 'react';
import golfData from './golfData';

function GolfScoreApp() {
  const [holeScores, setHoleScores] = useState(Array(golfData.length).fill(0));

  const handleScoreChange = (index, event) => {
    const newScores = [...holeScores];
    newScores[index] = Number(event.target.value);
    setHoleScores(newScores);
  };

  const totalScore = holeScores.reduce((total, score) => total + score, 0);

  return (
    <div>
      <h1>Golf Score App</h1>
      <table>
        <thead>
          <tr>
            <th>Hole</th>
            <th>Par</th>
            <th>Distance</th>
            <th>Handicap</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {golfData.map((hole, index) => (
            <tr key={index}>
              <td>{hole.hole}</td>
              <td>{hole.par}</td>
              <td>{hole.distance}</td>
              <td>{hole.handicap}</td>
              <td>
                <input
                  type="number"
                  value={holeScores[index]}
                  onChange={(event) => handleScoreChange(index, event)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total Score: {totalScore}</h2>
    </div>
  );
}

export default GolfScoreApp;
