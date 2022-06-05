import { Vector } from "./Vector.type"

export const pathfind = (A: boolean[][], P: Vector, Q: Vector): number => {
  if (P.x===Q.x && P.y===Q.y) {
    return 0
  }
  var openList   = [];
  var closedList = [];
  openList.push([P, 0, 0, 0]);//[node, g, h, f]
  while(openList.length > 0) {

    // Get the node with the lowest F cost
    var lowindex = 0;
    for(var i = 0; i < openList.length; i++) {
      if(openList[i][3] < openList[lowindex][3]) {
        lowindex = i;
      }
    }
    var current = openList[lowindex];
    openList.splice(lowindex, 1);
    closedList.push(current);
    // generate neighbors
    var neighbors = [];
    if(current[0].x > 0) {
      if(A[current[0].y][current[0].x-1]=== true) {
        neighbors.push([{x: current[0].x - 1, y: current[0].y}, current[1] + 1]);
      }
    }
    if(current[0].y > 0) {
      if(A[current[0].y-1][current[0].x]=== true) {
        neighbors.push([{x: current[0].x, y: current[0].y - 1}, current[1] + 1]);
      }
    }
    if(current[0].x < A.length - 1) {
      if(A[current[0].y][current[0].x+1]=== true) {
        neighbors.push([{x: current[0].x + 1, y: current[0].y}, current[1] + 1]);
      }
    }
    if(current[0].y < A[0].length - 1) {
      if(A[current[0].y+1][current[0].x] === true) {
        neighbors.push([{x: current[0].x, y: current[0].y + 1}, current[1] + 1]);
      }
    }
    //loop through successors
    for(var i = 0; i < neighbors.length; i++) {
      //check if successor is goal
      if(neighbors[i][0].x == Q.x && neighbors[i][0].y == Q.y) {
        return neighbors[i][1];
      }
      //generate h and f costs
      neighbors[i][2] = Math.abs(neighbors[i][0].x - Q.x) + Math.abs(neighbors[i][0].y - Q.y);
      neighbors[i][3] = neighbors[i][1] + neighbors[i][2];
      //check open list
      var inOpenList = false;
      for(var j = 0; j < openList.length; j++) {
        if(openList[j][0].x == neighbors[i][0].x && openList[j][0].y == neighbors[i][0].y) {
          inOpenList = true;
          if(openList[j][3] > neighbors[i][3]) {
            openList[j] = neighbors[i];
          }
        }
      }

      //check closed list
      var inClosedList = false;
      for(var j = 0; j < closedList.length; j++) {
        if(closedList[j][0].x == neighbors[i][0].x && closedList[j][0].y == neighbors[i][0].y) {
          inClosedList = true;
          if(closedList[j][3] > neighbors[i][3]) {
            closedList[j] = neighbors[i];
          }
        }
      }

      //if not in open or closed list, add to open list
      if(!inOpenList && !inClosedList) {
        openList.push(neighbors[i]);
      }

    }



  }
}
