import React, { useEffect } from 'react';

const EpisodeDetails = ({ match, episode, episodeError, fetchEpisode }) => {
  useEffect(() => {
    fetchEpisode(match.params.id);
  }, [fetchEpisode, match.params.id]);

  if (episodeError) {
    return <div>Error by loading Episode. Please try to reload.</div>;
  }

  if (episode === undefined) {
    return null;
  }

  return (
    <div>
      <h1>{episode.name}</h1>
    </div>
  );
};

export default EpisodeDetails;
