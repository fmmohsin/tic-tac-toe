export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const getPossiblePosition = (playerAvatar, AIAvatar, squares) => {
    let playerWinningPos = null;
    let AIWinningPos = null;
    for (var i = 0; i < squares.length; i++) {
        if (squares[i] === '' && squares[i] !== null && squares[i] !== undefined) {
            let localSquare = squares.concat();
            localSquare[i] = AIAvatar;
            if (calculateWinner(localSquare) === AIAvatar)
                AIWinningPos = i;
            localSquare[i] = playerAvatar;
            if (calculateWinner(localSquare) === playerAvatar)
                playerWinningPos = i;
        }
    }
    if (AIWinningPos !== null)
        return AIWinningPos;
    if (playerWinningPos !== null)
        return playerWinningPos;
    let findpos;
    do {
        findpos = Math.floor(Math.random() * squares.length);
        if (squares[findpos] === null || squares[findpos] === undefined || squares[findpos] === '')
            break;
    } while (1)
    return findpos
}
