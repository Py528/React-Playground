import React, { useEffect } from 'react';
import sound1 from '../static/1.mp3';
import sound2 from '../static/2.wav';
import sound3 from '../static/3.wav';
import sound4 from '../static/4.wav';
import sound5 from '../static/5.wav';
import sound6 from '../static/6.wav';
import sound7 from '../static/7.wav';
import sound8 from '../static/8.wav';
import sound9 from '../static/9.wav';
import sound10 from '../static/10.wav';
import sound11 from '../static/11.wav';
import sound12 from '../static/12.wav';
import sound13 from '../static/13.wav';
import sound14 from '../static/14.wav';
import sound15 from '../static/15.wav';
import sound16 from '../static/16.wav';
import sound17 from '../static/17.wav';
import sound18 from '../static/18.wav';
import sound19 from '../static/19.wav';
import sound20 from '../static/20.wav';
import sound21 from '../static/21.wav';
import sound22 from '../static/22.wav';
import sound23 from '../static/23.wav';
import sound24 from '../static/24.wav';
import sound25 from '../static/25.wav';
import sound26 from '../static/26.wav';
function WholeScreenKey() {
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleKeyDown = (event) => {
		if (event.key === 'a' || event.key === 'A') {
			const audio = new Audio(sound1);
			audio.play();
		} else if (event.key === 'b' || event.key === 'B') {
			const audio = new Audio(sound2);
			audio.play();
		} else if (event.key === 'c' || event.key === 'C') {
			const audio = new Audio(sound3);
			audio.play();
		} else if (event.key === 'd' || event.key === 'D') {
			const audio = new Audio(sound4);
			audio.play();
		} else if (event.key === 'e' || event.key === 'E') {
			const audio = new Audio(sound5);
			audio.play();
		} else if (event.key === 'f' || event.key === 'F') {
			const audio = new Audio(sound6);
			audio.play();
		} else if (event.key === 'g' || event.key === 'G') {
			const audio = new Audio(sound7);
			audio.play();
		} else if (event.key === 'h' || event.key === 'H') {
			const audio = new Audio(sound8);
			audio.play();
		} else if (event.key === 'i' || event.key === 'I') {
			const audio = new Audio(sound9);
			audio.play();
		} else if (event.key === 'j' || event.key === 'J') {
			const audio = new Audio(sound10);
			audio.play();
		} else if (event.key === 'k' || event.key === 'K') {
			const audio = new Audio(sound11);
			audio.play();
		} else if (event.key === 'l' || event.key === 'L') {
			const audio = new Audio(sound12);
			audio.play();
		} else if (event.key === 'm' || event.key === 'M') {
			const audio = new Audio(sound13);
			audio.play();
		} else if (event.key === 'n' || event.key === 'N') {
			const audio = new Audio(sound14);
			audio.play();
		} else if (event.key === 'o' || event.key === 'O') {
			const audio = new Audio(sound15);
			audio.play();
		} else if (event.key === 'p' || event.key === 'P') {
			const audio = new Audio(sound16);
			audio.play();
		} else if (event.key === 'q' || event.key === 'Q') {
			const audio = new Audio(sound17);
			audio.play();
		} else if (event.key === 'r' || event.key === 'R') {
			const audio = new Audio(sound18);
			audio.play();
		} else if (event.key === 's' || event.key === 'S') {
			const audio = new Audio(sound19);
			audio.play();
		} else if (event.key === 't' || event.key === 'T') {
			const audio = new Audio(sound20);
			audio.play();
		} else if (event.key === 'u' || event.key === 'U') {
			const audio = new Audio(sound21);
			audio.play();
		} else if (event.key === 'v' || event.key === 'V') {
			const audio = new Audio(sound22);
			audio.play();
		} else if (event.key === 'w' || event.key === 'W') {
			const audio = new Audio(sound23);
			audio.play();
		} else if (event.key === 'x' || event.key === 'X') {
			const audio = new Audio(sound24);
			audio.play();
		} else if (event.key === 'y' || event.key === 'Y') {
			const audio = new Audio(sound25);
			audio.play();
		} else if (event.key === 'z' || event.key === 'Z') {
			const audio = new Audio(sound23);
			audio.play();
		}
	};

	return (
		<div>
			<input></input>
		</div>
	);
}

export default WholeScreenKey;

///dfadsfdasf/asdf/dsa/fa/dsf/sd/f/dsf/
