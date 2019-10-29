function renderWinner(winner) {
    return `

	<div class="userHeScorRow" style="background-color:grey">
		<p>${winner.winner}</p>
		<p>${winner.date}</p>
	</div>
`;
}

function renderWinners(winners) {
    return winners.map(winner => renderWinner(winner))
        .join('');}

fetch('http://starnavi-frontend-test-task.herokuapp.com/winners?per_page=12')
    .then(
        function(response) {
            response.json().then(function(winners) {
            	console.log(winners)
                    document.querySelector('.userHeScore').insertAdjacentHTML('afterbegin', renderWinners(winners));
            });
        }
    );

