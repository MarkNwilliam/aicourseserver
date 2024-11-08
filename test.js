// Import the youtube-search-api library
const youtubesearchapi = require("youtube-search-api");

// Function to search YouTube videos by keyword
async function searchYouTube(keyword, limit = 5) {
  try {
    // Perform the search
    const searchResults = await youtubesearchapi.GetListByKeyword(keyword, false, limit, [{ type: "video" }]);

    // Display the search results
    console.log(`Search Results for: "${keyword}"\n`);
    searchResults.items.forEach((item, index) => {
      console.log(`${index + 1}. Title: ${item.title}`);
      console.log(`   Channel: ${item.channelTitle}`);
      console.log(`   URL: https://www.youtube.com/watch?v=${item.id}\n`);
    });
  } catch (error) {
    console.error("Error during search:", error);
  }
}

// Example search
searchYouTube("technology news", 5);
