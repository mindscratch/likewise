
Posts = new Meteor.Collection("posts");

Meteor.subscribe("posts", function() {
  // var post = Posts.findOne({}, {sort: {timestamp: -1}});

});

Template.posts.posts = function() { return Posts.find(); }


Template.nav_menu.postsCount = function() { return Posts.find().count(); }

Template.nav_menu.tagsCount = function() {
  var tags = Posts.find().map(function(post) {
    return post.tags;
  });
  return _.uniq(_.flatten(tags)).length;
}
