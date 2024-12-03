class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

const video1 = new Video("The Ultimate Road Trip Playlist", "Alice", 300);
video1.watch();

const video2 = new Video("Meditation for Beginners", "Bob", 600);
video2.watch();

const videoDataArray = [
  {
    title: "The Great Outdoors: A Journey Through the Amazon Rainforest",
    uploader: "Alice",
    time: 300,
  },
  { title: "Mastering the Art of French Cooking", uploader: "Bob", time: 600 },
  {
    title: "Top 10 Most Beautiful Beaches in the World",
    uploader: "Charlie",
    time: 450,
  },
  {
    title: "A Night Under the Stars: Camping in the Rockies",
    uploader: "Dana",
    time: 200,
  },
  { title: "The Science of Happiness", uploader: "Eve", time: 350 },
];

const videos = videoDataArray.map(
  (data) => new Video(data.title, data.uploader, data.time)
);

videos.forEach((video) => video.watch());
