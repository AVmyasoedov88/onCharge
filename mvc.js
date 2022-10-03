import onChange from 'on-change';

function app() {
	const state = {
		value: 0,
	};

	const result = document.getElementById('result');

	const watchedState = onChange(
		state,
		(path, value) => {
			console.log(path)
			result.textContent = value;
		}
	);

	const incHandler = () => {
		watchedState.value += 1;
	};

	const decHandler = () => {
		watchedState.value -= 1;
	};

	const inc = document.getElementById('increment');
	inc.addEventListener('click', incHandler);

	const dec = document.getElementById('decrement');
	dec.addEventListener('click', decHandler);
}
  
  app();

  console.log("Hello")