import React, { useState, useEffect } from "react";

const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

const FootballMatches = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompetitions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
        );
        const data = await response.json();
        setCompetitions(data);
      } catch (err) {
        setError("Failed to fetch data");
        setCompetitions([]);
      }
      setLoading(false);
    };

    fetchCompetitions();
  }, [selectedYear]);

  return (
    <div>
      <h1>Football Competitions</h1>
      <div>
        {years.map((year) => (
          <button key={year} onClick={() => setSelectedYear(year)}>
            {year}
          </button>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && competitions.data?.length > 0 && (
        <div>
          <h3>Total Match -{competitions.total}</h3>
          {competitions.data.map((competition) => (
            <div key={competition.name}>
              <h2>{competition.name}</h2>
              <p>{competition.country}</p>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && competitions.data?.length === 0 && (
        <p>No competitions found for the selected year.</p>
      )}
    </div>
  );
};

export default FootballMatches;
