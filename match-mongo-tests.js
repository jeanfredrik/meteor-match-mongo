
Tinytest.add('Match.test() simple selector', function (test) {
  test.equal(
  	Match.test(
  		{foo: 'foo'},
  		Match.Mongo(
  			{foo: 'foo'}
  		)
  	),
  	true
  );
});

Tinytest.add('Match.test() array selector', function (test) {
	var doc = {members: [
		{name: 'jane', age: 22}
	]};
  test.equal(
  	Match.test(
  		doc,
  		Match.Mongo(
  			{'members.name': 'jane'}
  		)
  	),
  	true
  );
  test.equal(
  	Match.test(
  		doc,
  		Match.Mongo(
  			{'members.name': 'joe'}
  		)
  	),
  	false
  );
});

Tinytest.add('Match.test() complex selector', function (test) {
	var doc = {members: [
		{name: 'jane', age: 22}
	]};
  test.equal(
  	Match.test(
  		doc,
  		Match.Mongo(
  			{'members.age': {$gt: 20}}
  		)
  	),
  	true
  );
  test.equal(
  	Match.test(
  		doc,
  		Match.Mongo(
  			{'members.age': {$lte: 20}}
  		)
  	),
  	false
  );
});

Tinytest.add('check()', function (test) {
  var error = false;
  try {
  	check(
  		{foo: 'foo'},
  		Match.Mongo(
  			{foo: 'foo'}
  		)
  	);
  } catch(e) {
  	error = true;
  }
  test.equal(error, false);

  error = false;
  try {
  	check(
  		{foo: 'foo'},
  		Match.Mongo(
  			{foo: {$ne: 'foo'}}
  		)
  	);
  } catch(e) {
  	error = true;
  }
  test.equal(error, true);
});

Tinytest.add('Match.testMongo()', function (test) {
  test.equal(
  	Match.testMongo(
  		{foo: 'foo'},
  		{foo: 'foo'}
  	),
  	true
  );
	var doc = {members: [
		{name: 'jane', age: 22}
	]};
  test.equal(
  	Match.testMongo(
  		doc,
  		{'members.age': {$gt: 20}}
  	),
  	true
  );
});

Tinytest.add('Mongo.match()', function (test) {
  test.equal(
    Mongo.match(
      {foo: 'foo'},
      {foo: 'foo'}
    ),
    true
  );
  var doc = {members: [
    {name: 'jane', age: 22}
  ]};
  test.equal(
    Mongo.match(
      doc,
      {'members.age': {$gt: 20}}
    ),
    true
  );
});

Tinytest.add('Mongo.match() complex', function (test) {
  doc = {
    members: [
      {name: 'Jane', age: 22},
      {name: 'Joe', age: 18},
    ]
  };
  test.equal(
  	Mongo.match(
  		doc,
      {'members.age': {$gt: 20}}
  		//{'members.age': {$not: {$lt: 20}}}
  	),
  	false
  );
});