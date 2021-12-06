const startBtn = document.querySelector( '#start' );
const screens = document.querySelectorAll( '.screen' );
const timeList = document.querySelector( '#time-list' );
const timeEl = document.querySelector( '#time' );
const board = document.querySelector( '#board' );
let time = 0;
let score = 0;
const colors = [
	['#ffdeb8','#F7C59F', '#deac86'],
	['#434b64','#2A324B','#111932'], 
	['#8f94aa','#767B91','#5d6278'], 
	['#e0e5f4','#C7CCDB','#aeb3c2'], 
	['#fafeff','#E1E5EE','#c8ccd5'], 
	['#c8dbee','#AFC2D5','#96a9bc'], 
	['#e5f6ec','#CCDDD3','#b3c4ba'], 
	['#f8ffe3','#DFEFCA','#c6d6b1'], 
	['#ffffbe','#FFF9A5','#e6e08c'], 
	['#cda496','#B48B7D','#9b7264']
];

startBtn.addEventListener( 'click', ( event ) => {
    event.preventDefault();
    screens[0].classList.add( 'up' );
});

timeList.addEventListener( 'click', event => {

    if ( event.target.classList.contains( 'time-btn' ) ) {
        time = parseInt( event.target.getAttribute( 'data-time' ) );
        screens[1].classList.add( 'up' );
        startGame();
    }

});

board.addEventListener( 'click', event => {

    if ( event.target.classList.contains( 'circle' ) ) {

        score++;
        event.target.remove( );
        createRandomCircle( );

    }

});

function startGame( ) {

    setInterval( decreaseTime, 1000 );

    createRandomCircle( );

    setTime( time );

}

function decreaseTime( ) {

    if ( time === 0 ) {

        finishGame( );

    } else {

        let current = --time;

        if ( current < 10 ) {
            current = `0${ current }`;
        }

        setTime( current );

    }

}

function setTime( value ) {

    timeEl.innerHTML = `00:${ value }`;

}

function finishGame( ) {

    timeEl.parentNode.classList.add( 'hide' );
    board.innerHTML = `<h1>Счёт: <span class="primary" >${ score }</span></h1>`;

}

function createRandomCircle( ) {

    const circle = document.createElement( 'div' );
    const size = getRandomNumber( 10, 60 );
    const { width, height } = board.getBoundingClientRect( )
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    

    circle.classList.add( 'circle' );
    setColor( circle );
    circle.style.width = `${ size }px`;
    circle.style.height = `${ size }px`;
    circle.style.top = `${ x }px`;
    circle.style.left = `${ y }px`;
    

    board.append( circle );

}

function getRandomNumber( min, max ) {

    return Math.round( Math.random( ) * ( max - min ) + min );

}

function setColor( element ) {

	const color = getRandomColor( );
	element.style.background = `linear-gradient(90deg, ${ color[0] } 0%, ${ color[1] } 47%, ${ color[2] } 100%)`;

}

function removeColor( element ) {

	element.style.backgroundColor = '#1d1d1d';

}

function getRandomColor( ) {

	const index = Math.floor( Math.random( ) * colors.length );

	return colors[index];

}