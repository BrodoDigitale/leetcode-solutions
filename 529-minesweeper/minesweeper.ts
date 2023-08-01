type point = {
    x: number,
    y: number
}

function updateBoard(board: string[][], click: number[]): string[][] {

    const width: number = board[0].length;
    const height: number = board.length;

    //return if the cell contains a mine
    const dfs = (point: point) => {
         const x: number = point.x;
         const y: number = point.y;

        if(board[point.y][point.x] === 'M') {
            board[point.y][point.x] = "X";
            return;
        }
        //push all neighbour cells into array
        const adjasents :point[] = [];

        for(let curX = x - 1; curX <= x + 1; curX++) {
            for(let curY = y - 1; curY <= y + 1; curY++) {
                if(curX < width && curX >= 0 && curY < height && curY >= 0) {
                    adjasents.push({y: curY, x: curX});
                }
            }
        }

        //count how many mines around the cell
        const minesCounter: number = adjasents.reduce((acc, curr) => acc += board[curr.y][curr.x] === "M" ? 1 : 0, 0)
        if(minesCounter > 0) {
            board[y][x] = minesCounter.toString();
        } else {
            board[y][x] = "B";
            for(const el of adjasents) {
                if(board[el.y][el.x] === "E") {
                    dfs({x: el.x, y: el.y})
                }
            }
        }

    }



    dfs({x: click[1], y: click[0]});

    return board;
};