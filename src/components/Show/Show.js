import React, { useEffect } from 'react';
import EpisodesList from '../../containers/EpisodesList';

import Loading from '../Loading';
import Error from '../Error';
import { removeTags } from '../../utils';

const Show = ({ show, showError, fetchShow }) => {
  useEffect(() => {
    if (show && show.id) {
      return;
    }
    fetchShow();
  }, [fetchShow, show]);

  if (showError) {
    return <Error error="Error by loading Show. Please try to reload" />;
  }

  if (!show || Object.keys(show).length === 0) {
    return <Loading />;
  }

  return (
    <div className="page">
      <div className="align-center">
        <h1>{show.name}</h1>
      </div>

      <div className="main-content">
        <div>
          <img
            className="cover-image"
            src={
              show.image
                ? show.image.original
                : 'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'
            }
            alt="poster"
          />
        </div>
        <div className="summary">{removeTags(show.summary)}</div>
      </div>

      <div className="align-center">
        <h2>Episodes</h2>
      </div>
      <EpisodesList />
    </div>
  );
};

export default Show;
