//<![CDATA[
// gets date info
var now = new Date();
var today = now.toDateString();
var time = now.toLocaleTimeString();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var milliseconds = now.getMilliseconds();
var newSeconds = seconds+ (milliseconds/1000);
var userHours;
var easyTime;

//converts 24hour to easy to read 12 hour format
function easyTimes(t){
	if(t === "00:00"){easyTime = "12a"}
	if(t === "01:00"){easyTime = "1a"}
	if(t === "02:00"){easyTime = "2a"}
	if(t === "03:00"){easyTime = "3a"}
	if(t === "04:00"){easyTime = "4a"}
	if(t === "05:00"){easyTime = "5a"}
	if(t === "06:00"){easyTime = "6a"}
	if(t === "07:00"){easyTime = "7a"}
	if(t === "08:00"){easyTime = "8a"}
	if(t === "09:00"){easyTime = "9a"}
	if(t === "10:00"){easyTime = "10a"}
	if(t === "11:00"){easyTime = "11a"}
	if(t === "12:00"){easyTime = "12p"}
	if(t === "13:00"){easyTime = "1p"}
	if(t === "14:00"){easyTime = "2p"}
	if(t === "15:00"){easyTime = "3p"}
	if(t === "16:00"){easyTime = "4p"}
	if(t === "17:00"){easyTime = "5p"}
	if(t === "18:00"){easyTime = "6p"}
	if(t === "19:00"){easyTime = "7p"}
	if(t === "20:00"){easyTime = "8p"}
	if(t === "21:00"){easyTime = "9p"}
	if(t === "22:00"){easyTime = "10p"}
	if(t === "23:00"){easyTime = "11p"}

	if(twentyfourhour){
		return t;
	}else{
		return easyTime;
	}
}

// adds zero to number if single digit
function timeValueCorrection(tc) {
		if (tc < 10) {
					return "0" + tc;
		} else {
					return tc;
		}
}

function convertHours(h){
	if(twentyfourhour){
		userHours = h;
	}else{
		userHours = ((h + 11) % 12 + 1);
	}
	return userHours;
}

//updates time and populates elements
function updateTime(){
	now = new Date();
	today = now.toDateString();
	time = now.toLocaleTimeString();
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();
	milliseconds = now.getMilliseconds();
	newSeconds = seconds+ (milliseconds/1000);
	document.getElementById('time').innerHTML = convertHours(hours) + ":" + timeValueCorrection(minutes);
	document.getElementById('date').innerHTML = translate[current].smonth[now.getMonth()] + " " + now.getDate();
}
//]]>
