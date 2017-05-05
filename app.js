var timeline = anime.timeline({
	loop: false,
	autoplay: false,
	update: function (state) {
		$('.details__time').text('current time : ' + Math.round(state.currentTime) + 'ms');
		$('.details__progress').text('progress : ' + Math.round(state.progress) + '%');
	}
});

timeline
	.add({
		targets: '.ani-bg',
		width: '100%',
		duration: 750,
		elasticity: 0,
	})
	.add({
		targets: '.ani-bg--fill',
		width: randomValue(),
		backgroundColor: '#0e9cf3',
		duration: 750,
		offset: 450,
		elasticity: 0
	})
	.add({
		targets: '.ani-bg--value',
		offset: 550,
		opacity: 1
	});

$(".anim-hover").click(timeline.restart);

function randomValue() {
	var randomVal = Math.round(Math.random() * 100) + '%';

	$('.ani-bg--value').text(randomVal);

	return randomVal;
}