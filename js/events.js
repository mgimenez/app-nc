(function(win, doc, $) {
  'use strict';

  var events = {

    getEvents: function(zone) {
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: 'https://api-nc.herokuapp.com/?zone=' + zone,
          success: function(data) {
            resolve(data);
          }
        });
      });
    }
  };

  window.events = events;

}(window, window.document, window.jQuery));