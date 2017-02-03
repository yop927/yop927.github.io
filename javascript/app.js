

function hexClock() {
	var time = new Date();
	// we need toString because getHours will give an integer, but we need to find out 
	// the length of the integer.
	var hours = (time.getHours() % 12).toString();
	var min = time.getMinutes().toString();
	var sec = time.getSeconds().toString();
	var session = "AM";

	// if hour is one digit, we need 0 in front of it.
	if (hrs.length < 2) {
		hours = '0' + hours;
		session = "AM";
	}

	if (hrs.length >= 2) {
		session = "PM";
	}

	if (min.length < 2) {
		min = '0' + min;
	}

	if (sec.length < 2) {
		sec = '0' + sec;
	}

	
	var myClock = document.getElementById('ClockDisplay');
	myClock.textContent = hours + ':' + min + ':' + sec + " " + diem;

	setTimeout(showTime, 1000);
}

hexClock();