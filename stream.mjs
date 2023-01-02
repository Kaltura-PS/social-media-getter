import { Client } from "twitter-api-sdk";
import * as dotenv from 'dotenv' ;
dotenv.config()


const twitterClient = new Client(process.env.BEARER_TOKEN);
(async () => {
  try {
    const usersTweets = await twitterClient.tweets.usersIdTweets(
      //The ID of the User to list Tweets of - Kaltura
      15955214,
      {
        //A comma separated list of fields to expand
    //     expansions: ["attachments.media_keys"],


    //     "media.fields":[
    //       "duration_ms","height","media_key","preview_image_url","public_metrics","type","url","width","alt_text"
    //  ],
        //A comma separated list of Tweet fields to display
        // "tweet.fields": [
        //   "created_at",
        //   "author_id",
        //   "conversation_id",
        //   "public_metrics",
        //   "context_annotations",
        // ],

        //A comma separated list of User fields to display
        "user.fields": ["username"],

        //The maximum number of results
        max_results: 10,
      }
    );
    console.dir(usersTweets, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
})();


    //by query
    // (async () => {
      
    //     const usersTweets = await twitterClient.tweets.tweetCountsFullArchiveSearch("trump")
    //     console.log(usersTweets)
      
    // })();