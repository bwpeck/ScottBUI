import axios from 'axios';

const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({baseURL: URL});



// GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelType=show&eventType=completed&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
