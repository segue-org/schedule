(function() {
  "use strict";

  angular
    .module('segue.schedule')
    .constant('Config', {
      API_HOST: 'http://192.168.33.91',
      API_PATH: '/api',
      PROPOSAL_LANGUAGES: [
        { abbr: 'pt', name: 'português' },
        { abbr: 'es', name: 'espanhol' },
        { abbr: 'en', name: 'inglês' },
      ],
      PROPOSAL_LEVELS: [ "beginner", "advanced" ],
      TIMEZONE: '-0300',
      EVENT_DAYS: ["2015-07-08","2015-07-09","2015-07-10","2015-07-11"],
      HOURS: [ 9, 10,11,12,13,14,15,16,17,18,19 ]
    });

})();
