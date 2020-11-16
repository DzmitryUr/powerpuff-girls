import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { removeTags } from '../utils';

const EpisodeDetails = ({ match, episode, episodeError, fetchEpisode }) => {
  useEffect(() => {
    fetchEpisode(match.params.id);
  }, [fetchEpisode, match.params.id]);

  if (episodeError) {
    return <div className="error">Error by loading Episode. Please try to reload.</div>;
  }

  if (!episode || Object.keys(episode).length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="page">
      <div className="">
        <Link to={'/'}>The Powerpuff Girls</Link> {` / ${episode.name}`}
      </div>
      <div className="align-center">
        <h1>{episode.name}</h1>
      </div>

      <div className="main-content">
        <div>
          <img
            className="cover-image"
            src={
              episode.image
                ? episode.image.original
                : 'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'
            }
            alt="poster"
          />
        </div>
        <div className="summary">{removeTags(episode.summary)}</div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
