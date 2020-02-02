import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var milliseconds = -1
var timer;
var running = false;
var lapTimes = [];
var addLapTimes = setTimeout(function initialLapLoad(){updateLaptimes(); console.log(addLapTimes);}, 500);

function retrieveSavedLapTimes() {
	var data = localStorage.getItem('lapTimes');
	if (data === null || data === "") {
		console.log("No data stored");
	}
	else {
		lapTimes = data.split(',')
	}
}

function setTimer() {
	timer = setInterval(function update() {
		milliseconds++;
		ReactDOM.render(millisecondsToTime(milliseconds), document.getElementById('time'));
	}, 10);
	console.log(lapTimes);
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
	updateLaptimes();
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
	localStorage.setItem('lapTimes', lapTimes.toString());
	updateLaptimes();
}

function updateLaptimes() {
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
	updateLaptimes();
	localStorage.setItem('lapTimes', lapTimes.toString());
}


function resetClick() {
	updateLaptimes();
	milliseconds = 0;
	ReactDOM.render(millisecondsToTime(milliseconds), document.getElementById('time'));
}


function App() {
	retrieveSavedLapTimes();
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
				<div className="lap-times" id="laps"></div>
			</div>
		</div>
	);
}

export default App;
