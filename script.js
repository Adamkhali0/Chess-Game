let selectedPiece = null;

    const chessboard = document.querySelector('.chessboard');

    chessboard.addEventListener('click', (event) => {
        const clickedSquare = event.target;
        if (clickedSquare.classList.contains('selected')) {
            clickedSquare.classList.remove('selected');
            selectedPiece = null;
        } else if (clickedSquare.innerHTML !== '' && clickedSquare.innerHTML !== '&nbsp;') {
            if (selectedPiece) {
                selectedPiece.classList.remove('selected');
            }
            clickedSquare.classList.add('selected');
            selectedPiece = clickedSquare;
        } else if (selectedPiece) {
            clickedSquare.innerHTML = selectedPiece.innerHTML;
            selectedPiece.innerHTML = '';
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
        }
    });