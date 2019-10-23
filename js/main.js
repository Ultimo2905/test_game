// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.userHeScore').insertAdjacentHTML("afterbegin", renderWinners(winners));
// });

function renderWinner(winner) {
    return `

	<div class="userHeScor" style="background-color:grey">
		<p>${winners.user}</p>
		<p>${winners.date}</p>
	</div>
`;
}

function renderWinners(winners) {
    return winners.map(winner => renderWinner(winner))
        .join('');}

fetch('http://starnavi-frontend-test-task.herokuapp.com/winners')
    .then(
        function(response) {
            response.json().then(function(winners) {
            	console.log(winners)
                    document.querySelector('.userHeScore').insertAdjacentHTML('afterbegin', renderWinners(winners.winners));
            });
        }
    );
