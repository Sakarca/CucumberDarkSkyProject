$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DarkSky.feature");
formatter.feature({
  "line": 3,
  "name": "Verify darksky",
  "description": "",
  "id": "verify-darksky",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 7260806756,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyHomePage()"
});
formatter.result({
  "duration": 1566363951,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify timeline is displayed in correct format",
  "description": "",
  "id": "verify-darksky;verify-timeline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@timelineformat"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I entered California in search box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "California",
      "offset": 10
    }
  ],
  "location": "DarkSkyHomeSD.verifyChosenLocation(String)"
});
formatter.result({
  "duration": 5356632307,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyTimelineFormat()"
});
formatter.result({
  "duration": 2680374061,
  "status": "passed"
});
formatter.after({
  "duration": 177488604,
  "status": "passed"
});
formatter.before({
  "duration": 3179139126,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyHomePage()"
});
formatter.result({
  "duration": 1009284407,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "verify-darksky;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@temptimeline"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I expand today\u0027s timeline",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkyHomeSD.expandToday()"
});
formatter.result({
  "duration": 2055493037,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyTempValues()"
});
formatter.result({
  "duration": 117281638,
  "status": "passed"
});
formatter.after({
  "duration": 136905208,
  "status": "passed"
});
});