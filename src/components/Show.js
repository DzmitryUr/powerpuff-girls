import React, { useEffect } from 'react';
import EpisodesList from '../containers/EpisodesList';

const Show = ({ show, showError, fetchShow }) => {
  useEffect(() => {
    if (show && show.id) {
      return;
    }
    fetchShow();
  }, [fetchShow, show]);

  if (showError) {
    return <div>Error by loading Show. Please try to reload.</div>;
  }

  if (!show || Object.keys(show).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <EpisodesList />
    </div>
  );
};

export default Show;
