import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Episodes = ({ episodes, episodesError, fetchEpisodes }) => {
  useEffect(() => {
    if (episodes && episodes.length) {
      return;
    }
    fetchEpisodes();
  }, [fetchEpisodes, episodes]);

  if (episodesError) {
    return <div>Error by loading Episode. Please try to reload.</div>;
  }

  if (!episodes || !episodes.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {episodes.map((episode) => {
        return (
          <Link to={`/episodes/${episode.id}`} className="row ep-render" key={episode.id}>
            <div className="col-2-of-4">
              <h6>{episode.name}</h6>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Episodes;
