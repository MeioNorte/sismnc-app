// Template._changeTelevision.rendered = function () {

// };

Template._changeTelevision.events({
  'click .change-television .item, touchstart .change-television .item' : function(){
    IonModal.close();
    IonNavigation.skipTransitions = false;
    return true;
  }
});

// Template._changeTelevision.helpers({

// });