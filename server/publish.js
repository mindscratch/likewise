// Posts -- {title: String,
//           body: String,
//           tags: [String, ...],
//           timestamp: Number
//           }
Posts = new Meteor.Collection("posts");

Meteor.publish("posts", function() {
  return Posts.find();
});
