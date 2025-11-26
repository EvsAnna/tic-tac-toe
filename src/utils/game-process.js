export default {
    botMoving(board) {
        const availableCells = this.checkAvailableCells(board);
        if (availableCells.length > 0) {
            const botMoveNumber = this.getRandomMove(availableCells.length - 1);
            return {
                i: availableCells[botMoveNumber].i,
                j: availableCells[botMoveNumber].j,
            }
        }

        return null;
    },
    getRandomMove(max) {
        return Math.floor(Math.random() * max);
    },
    checkAvailableCells(board) {
        let cells = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '') {
                    cells.push({i, j});
                }
            }
        }

        return cells;
    },
    checkPlayerWin(bord, sign) {
        for (let i = 0; i < 3; i++) {
            if (bord[0][i] === sign && bord[1][i] === sign && bord[2][i] === sign) {
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (bord[i][0] === sign && bord[i][1] === sign && bord[i][2] === sign) {
                return true;
            }
        }

        if (bord[0][0] === sign && bord[1][1] === sign && bord[2][2] === sign) {
            return true;
        }

        if (bord[2][0] === sign && bord[1][1] === sign && bord[0][2] === sign) {
            return true;
        }
        return false;
    }
};