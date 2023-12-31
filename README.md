# youtube-api
# YouTube Data v3 API Wrapper

This is a JavaScript wrapper for the YouTube Data v3 API. It provides a simple and easy-to-use interface for making requests to the YouTube Data API.

## Installation

To install the library, run the following command:

```bash
npm install youtube-data-v3-api-wrapper


## Usage

To use the library, import it into your project and then create a YouTubeClient instance using your API key.

javascript
const youtube = require('youtube-data-v3-api');

const options = {
  key: '<YOUR_API_KEY>',
  version: 'v3'
};

const youtubeClient = youtube.initialize(options);


Once you have a YouTubeClient instance, you can use it to make requests to the YouTube Data API. For example, the following code gets a video by its ID:

javascript
const videoId = 'VIDEO_ID';

youtubeClient.getVideoById(videoId).then(video => {
  console.log(video);
}).catch(err => {
  console.error(err);
});


The library provides a number of functions for making requests to the YouTube Data API. For more information, please see the API documentation.

## API Documentation

The following functions are available:

* `getVideoById(videoId)`: Gets a video by its ID.
* `getVideoByURL(url)`: Gets a video by its URL.
* `getVideoByTitle(title)`: Gets a video by its title.
* `searchVideos(query)`: Searches for videos.

## License

This library is licensed under the MIT license.
