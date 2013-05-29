if (Meteor.isClient) {
  Template.hello.sessionVar = function () {
    return Session.get("sessionVar");
  };

  Template.hello.events({
    'click' : function () {
      Session.set("sessionVar", 'hello');
      $('#modal').modal('show');
    }
  });
}
