import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var milliseconds = -1
var timer;
var running = false;
var lapTimes = [];

function setTimer() {
	timer = setInterval(function update() {
		milliseconds++;
		ReactDOM.render(millisecondsToTime(milliseconds), document.getElementById('time'));
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

function startPauseClick() {

	if (!running) {
		setTimer();
		running = true;
		ReactDOM.render("Pause", document.getElementById('start'));
	}
	else {
		clearInterval(timer);
		running = false;
		ReactDOM.render("Start", document.getElementById('start'));
	}

}

function lapClick() {
	if (milliseconds < 0) {
		lapTimes.unshift(0)
	}
	else {
		lapTimes.unshift(milliseconds);
	}
	ReactDOM.render(createLapList(), document.getElementById('laps'));
}

function createLapList() {
	return (
		<ol>
			{lapTimes.map((lapTime, index) => <li key={index}>
				{millisecondsToTime(lapTime) + " "}<button className="delete-button" onClick={() => deleteLap(index)} >X</button></li>)}
		</ol>
	)
}


function deleteLap(index) {
	lapTimes.splice(index, 1);
	ReactDOM.render(createLapList(), document.getElementById('laps'));
}


function resetClick() {
	milliseconds = 0;
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
					<button className="button" id="start" onClick={startPauseClick}>Start</button>
					<button className="button" onClick={resetClick}>Reset</button>
				</div>
				<div className="button" onClick={lapClick}>Lap</div>
				<div className="lap-times" id="laps">

				</div>
			</div>
		</div>
	);
}

export default App;
