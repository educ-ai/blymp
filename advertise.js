// Based on the schema below parse json input and output into csv
// {
//     "type": "object",
//     "properties": {
//       "title": {
//         "type": "string"
//       },
//       "author": {
//         "type": "string"
//       },
//       "email": {
//         "type": "string",
//         "format": "email"
//       },
//       "image": {
//         "type": "string",
//         "format": "uri"
//       },
//       "channel_image": {
//         "type": "string",
//         "format": "uri"
//       },
//       "website": {
//         "type": "string",
//         "format": "uri"
//       },
//       "channel_place": {
//         "type": "string"
//       },
//       "channel_language": {
//         "type": "string"
//       },
//       "episode_count": {
//         "type": "integer",
//         "minimum": 0
//       },
//       "listen_score_top_percentage_humanized": {
//         "type": "string"
//       },
//       "audio_length_humanized": {
//         "type": "string"
//       },
//       "genres": {
//         "type": "array",
//         "items": {
//           "type": "object",
//           "properties": {
//             "name": {
//               "type": "string"
//             }
//           },
//           "required": [
//             "name"
//           ]
//         }
//       },
//       "earliest_pub_date": {
//         "type": "string"
//       }
//     },
//     "required": [
//       "title",
//       "author",
//       "email",
//       "image",
//       "channel_image",
//       "website",
//       "channel_place",
//       "channel_language",
//       "episode_count",
//       "listen_score_top_percentage_humanized",
//       "audio_length_humanized",
//       "genres",
//       "earliest_pub_date"
//     ]
//   }

function parseInputToCSV(input) {
    var parsedInput = JSON.parse(input);
    var csv = "";
    csv += parsedInput.title + ",";
    csv += parsedInput.author + ",";
    csv += parsedInput.email + ",";
    csv += parsedInput.image + ",";
    csv += parsedInput.channel_image + ",";
    csv += parsedInput.website + ",";
    csv += parsedInput.channel_place + ",";
    csv += parsedInput.channel_language + ",";
    csv += parsedInput.episode_count + ",";
    csv += parsedInput.listen_score_top_percentage_humanized + ",";
    csv += parsedInput.audio_length_humanized + ",";
    csv += parseGenres(parsedInput.genres) + ",";
    csv += parsedInput.earliest_pub_date;
    return csv;
}