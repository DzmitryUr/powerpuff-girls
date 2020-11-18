import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Error from '../Error';

const Episodes = ({ episodes, episodesError, fetchEpisodes }) => {
  useEffect(() => {
    if (episodes && episodes.length) {
      return;
    }
    fetchEpisodes();
  }, [fetchEpisodes, episodes]);

  if (episodesError) {
    return <Error error="Error by loading Episode. Please try to reload" />;
  }

  if (!episodes || !episodes.length) {
    return <Loading />;
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
