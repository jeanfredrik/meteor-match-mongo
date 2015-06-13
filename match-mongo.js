MongoMatcher = function(selector) {
	this._selector = selector;
	this._matcher = new Minimongo.Matcher(selector);
}

Match.Mongo = function(selector) {
	return new MongoMatcher(selector);
}

MongoMatcher.prototype = new Match.Where();

// If an object is an instance of Match.Where, Meteor built-in check API will look at the function named `condition` and will pass it the document to validate
MongoMatcher.prototype.condition = function(obj) {
  var match = this._matcher.documentMatches(obj);
  return match.result;
};

matchMongo = Match.testMongo = function(obj, selector) {
	var matcher = new Minimongo.Matcher(selector);
	var match = matcher.documentMatches(obj);
	return match.result;
}
if(Package.mongo) {
	Package.mongo.Mongo.match = matchMongo;
}
