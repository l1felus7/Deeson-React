import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var milliseconds = 0
var timer;

function setTimer() {
	timer = setInterval(function update() {
		ReactDOM.render(millisecondsToTime(milliseconds), document.getElementById('time'));
		milliseconds++;
	}, 10);
}


function millisecondsToTime(time) {
	function pad(n) {
		return ('00' + n).slice(-2);
	}
	var ms = time % 100;
	time = (time - ms) / 100;
	var secs = time % 60;
	time = (time - secs) / 60;
	var mins = time % 60;
	var hrs = (time - mins) / 60;

	return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + ':' + pad(ms);
}

function runStopwatch(instruction) {
	switch (instruction) {
		case "start":
			setTimer();
			break;
		case "pause":
			clearInterval(timer);
			break;
		case "reset":
			milliseconds = 0;
			break;
		default:
			break;
	}
}

function startClick() {
	runStopwatch("start");
}

function pauseClick() {
	runStopwatch("pause");
}

function resetClick() {
	runStopwatch("reset");
	ReactDOM.render(millisecondsToTime(milliseconds), document.getElementById('time'));
}


function App() {

	return (
		<div className="background">
			<div className="stopwatch">
				<div className="number-box">
					<h1 id="time">00:00:00:00</h1>
				</div>
				<div className="button-align">
					<button className="start button" onClick={startClick}>Start</button>

					<button className="pause button" onClick={pauseClick}>Pause</button>
					<button className="reset button" onClick={resetClick}>Reset</button>
				</div>
			</div>
		</div>
	);
}

export default App;
