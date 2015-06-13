# Match Mongo

Match an object against a mongo selector using check() and Match.test()

## Usage

With this package installed you can check if an object matches a Mongo selector using the built in `check()` and `Match.test()` functions. Use like this:

```javascript
check(obj, Match.Mongo(selector)); //throws an error if obj doesn't match selector
```

```javascript
Match.test(obj, Match.Mongo(selector)); //returns true or false
```

There is also a shorthand for the latter called `Match.testMongo()`:

```javascript
Match.testMongo(obj, selector); //returns true or false
```

And there's also `Mongo.match()`:

```javascript
Mongo.match(obj, selector); //returns true or false
```

## Examples

```javascript
//This is the document we will test
doc = {
	members: [
		{name: 'Jane', age: 22},
		{name: 'Joe', age: 18},
	]
};

//Check if any member in the document is 20 years old or older (will pass)
check(doc, Match.Mongo({'members.age': {$gte: 20}}));
```