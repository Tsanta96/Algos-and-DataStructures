// Three stones are on a number line at positions a, b, and c.

// Each turn, you pick up a stone at an endpoint(ie., either the lowest or highest position stone), 
// and move it to an unoccupied position between those endpoints.Formally, let 's say the stones 
// are currently at positions x, y, z with x < y < z.  You pick up the stone at either position x or position z, 
// and move that stone to an integer position k, with x < k < z and k != y.

// The game ends when you cannot make any more moves, ie.the stones are in consecutive positions.

// When the game ends, what is the min

var numMovesStones = function (a, b, c) {
    [a,b,c] = [a,b,c].sort((a,b) => a-b);
    let dis1 = b - a;
    let dis2 = c - b;
    if (dis1 > dis2) [dis1,dis2] = [dis2, dis1];
    let min;
    if (dis1 === 1) {
        if (dis2 === 1) min = 0;
        else min = 1;
    } else if (dis1 === 2) {
        min = 1;
    } else {
        // (1, 4, 7) = 1 => 3 and 7 => 5
        min = 2;
    }
    const max = dis1 + dis2 - 2;
    return [min, max];
}

console.log(numMovesStones(1,7,2));