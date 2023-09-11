var session = OT.initSession(apiKey, sessionId);

// create publisher
var publisher = OT.initPublisher();
session.connect(token, function(err) {
   // publish publisher
   
});

session.publish(publisher);

session.on('streamCreated', function(event) {
    session.subscribe(event.stream);
 });