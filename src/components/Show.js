import React, { useEffect } from 'react';
import EpisodesList from '../containers/EpisodesList';

import { removeTags } from '../utils';

const Show = ({ show, showError, fetchShow }) => {
  useEffect(() => {
    if (show && show.id) {
      return;
    }
    fetchShow();
  }, [fetchShow, show]);

  if (showError) {
    return <div className="error">Error by loading Show. Please try to reload.</div>;
  }

  if (!show || Object.keys(show).length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="page">
      <div className="align-center">
        <h1>{show.name}</h1>
      </div>

      <div className="main-content">
        <div>
          <img className="cover-image" src={show.image.original} alt="poster" />
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
