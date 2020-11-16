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
    return <div className="error">Error by loading Episode. Please try to reload.</div>;
  }

  if (!episodes || !episodes.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>
              {`${episode.name} (Season ${episode.season}, Number ${episode.number})`}
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
