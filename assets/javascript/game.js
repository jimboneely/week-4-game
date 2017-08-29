var targetNumber = 0;
  
  function setTarget(){
  targetNumber = Math.floor(Math.random() * 100);
  $("#number-to-guess").text(targetNumber);
  };

  //Calling the function here becuase the value of targetNumber is required for the functions below
  setTarget();
  

  var counter = 0;
  var winner = 0;
  var loser = 0;

// Set value of Thunder Crystal and onclick function
  var thunder = 0;
  function setThunder(){
  	thunder = Math.floor(Math.random() * 20);  	
  	console.log(thunder);
  };

  $("#thunderClick").on("click", function() {
    counter += thunder;
    $("#myGuess").text(counter);
	    if (counter == targetNumber) {
		winner++;
		$("#wins").text(winner);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
		if (counter > targetNumber) {
		loser++;
		$("#losses").text(loser);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
  });

  
// Set value of Water Crystal and onclick function
  var water = 0;
  function setWater(){
  	water = Math.floor(Math.random() * 20);  	
  	console.log(water);

  };

  $("#waterClick").on("click", function() {
    counter += water;
    $("#myGuess").text(counter);
	    if (counter == targetNumber) {
		winner++;
		$("#wins").text(winner);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
		if (counter > targetNumber) {
		loser++;
		$("#losses").text(loser);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
  });

  
// Set value of Fire Crystal and onclick function
  var fire = 0;
  function setFire(){
  	fire = Math.floor(Math.random() * 20);  	
  	console.log(fire);
  };

  $("#fireClick").on("click", function() {
    counter += fire;
    $("#myGuess").text(counter);
	    if (counter == targetNumber) {
		winner++;
		$("#wins").text(winner);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
		if (counter > targetNumber) {
		loser++;
		$("#losses").text(loser);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};

  });

  
// Set value of Moon Crystal and onclick function
  var moon = 0;
  function setMoon(){
  	moon = Math.floor(Math.random() * 20);  	
  	console.log(moon);
  };

  $("#moonClick").on("click", function() {
    counter += moon;
    $("#myGuess").text(counter);
	    if (counter == targetNumber) {
		winner++;
		$("#wins").text(winner);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
		if (counter > targetNumber) {
		loser++;
		$("#losses").text(loser);
		setTarget();
  		setThunder();
		setWater();
		setFire();
		setMoon();
		counter = 0;
		$("#myGuess").text(counter);
		};
  });

  setTarget();
  setThunder();
  setWater();
  setFire();
  setMoon();