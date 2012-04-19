Posts = new Meteor.Collection("posts");

Meteor.subscribe("posts", function() {
  var post = Posts.findOne({}, {sort: {timestamp: -1}});
  console.log("POST: ", post);
});
