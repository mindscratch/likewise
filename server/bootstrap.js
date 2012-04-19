// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var data = [
      {title: "Meteor Principles",
       body: "Today I'd like to write about meteor.",
       tags: ["meteor", "javascript"]
      },
      {title: "Ruby Principles",
       body: "Today I'd like to write about Ruby.",
       tags: ["ruby"]
      },
      {title: "JavaScript Principles",
       body: "Today I'd like to write about JavaScript.",
       tags: ["javascript"]
      }
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var info = data[i];
      Posts.insert({
        title: info.title,
        body: info.body,
        tags: info.tags,
        timestamp: timestamp
      });
      timestamp += 1; // ensure unique timestamp.
    }
  }
});