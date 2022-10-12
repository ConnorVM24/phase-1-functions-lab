const distance = 264;
const Hq = 42;
function distanceTravelledInFeet(start, finish) {
    
    return  Math.abs((finish - start) * distance);
}

function distanceFromHqInBlocks(blocks) {
    return (Math.abs(blocks - Hq));
}

function distanceFromHqInFeet(blocks) {
   const distance = distanceFromHqInBlocks(blocks);
    return distance * 264; 
}
