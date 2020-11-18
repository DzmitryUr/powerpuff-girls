import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { removeTags } from '../../utils';
import Loading from '../Loading';
import Error from '../Error';

const EpisodeDetails = ({ match, episode, episodeError, fetchEpisode }) => {
  useEffect(() => {
    fetchEpisode(match.params.id);
  }, [fetchEpisode, match.params.id]);

  if (episodeError) {
    return <Error error="Error by loading Episode. Please try to reload" />;
  }

  if (!episode || Object.keys(episode).length === 0) {
    return <Loading />;
  }

  return (
    <div className="page">
      <div>
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
