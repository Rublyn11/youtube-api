const youtube = require('youtube-api');

const options = {
  key: 'AIzaSyCS2lJ6xc9Px0rUtbsXg3c2fa49vGn0VAs',
  version: 'v3'
};

const youtubeClient = youtube.initialize(options);

function getVideoById(videoId) {
  return new Promise((resolve, reject) => {
    youtubeClient.videos.list({
      part: 'snippet',
      id: videoId
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.items[0]);
      }
    });
  });
}

function getVideoByURL(url) {
  return new Promise((resolve, reject) => {
    const videoId = youtube.getVideoId(url);
    if (!videoId) {
      reject(new Error('Invalid YouTube URL'));
    } else {
      getVideoById(videoId).then(video => resolve(video)).catch(err => reject(err));
    }
  });
}

function getVideoByTitle(title) {
  return new Promise((resolve, reject) => {
    youtubeClient.search.list({
      part: 'snippet',
      q: title,
      type: 'video'
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.items[0]);
      }
    });
  });
}

function searchVideos(query) {
  return new Promise((resolve, reject) => {
    youtubeClient.search.list({
      part: 'snippet',
      q: query,
      type: 'video'
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.items);
      }
    });
  });
}

module.exports = {
  getVideoById: getVideoById,
  getVideoByURL: getVideoByURL,
  getVideoByTitle: getVideoByTitle,
  searchVideos: searchVideos
};
