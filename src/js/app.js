(function(win, doc, $, events, templates) {
  'use strict';

  var app = {

    init: function() {
      this.populateEvents();
      this.zonesHandler();
      this.instantSearch();
    },

    populateEvents: function(z) {
      var location = doc.location.search,
          zone = z || location.split('?zone=')[1],
          $nextEvents = $('.js-next-events').addClass('loading'),
          defaultZone = 'buenos-aires';

      events.getEvents(zone).then(function(events) {
        $nextEvents
          .append(templates.listEvents(events))
          .removeClass('loading');
      });

      // first time
      if (z === undefined) {
        var path = doc.location.origin + doc.location.pathname;
        zone = zone === undefined ? defaultZone : zone;
        location = location === '' ? '?zone=' + defaultZone : location;
        $('a[href="' + location || + '"]').addClass('active');
        win.history.pushState({'zone':zone},'eRaver', path + '?zone=' + zone);
      }


    },

    getZones: function(zone, self) {
      $('.js-list-zones a').removeClass('active');
      $(self).addClass('active');
      $('.js-next-events').empty();
      app.populateEvents(zone);

    },

    zonesHandler: function() {
      $('.js-list-zones').on('click', 'a', function(ev) {
        ev.preventDefault();
        $('.js-input-search').val('');
        var zone = ev.target.href.split('?zone=')[1],
            path = doc.location.origin + doc.location.pathname;
        app.getZones(zone, this);
        win.history.pushState({'zone':zone},'eRaver', path + '?zone=' + zone);
      });

      window.onpopstate = function(event) {
        if (event.state !== null) {
          var trigger = $('a[href="?zone=' + event.state.zone + '"]');
          app.getZones(event.state.zone, trigger);
        }
      };
    },

    instantSearch: function() {
      $('.js-input-search').keyup(function () {
        var filter = $(this).val();
        $(".js-list-events li").each(function () {
          if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      });
    }
  };

  app.init();

}(window, window.document, window.jQuery, window.events, window.templates));