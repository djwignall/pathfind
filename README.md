# Oxbury Pathfind

Imagine representing a grid-shaped game map as a 2-dimensional array. Each value of this array is
boolean `true` or `false` representing whether that part of the map is passable (a floor) or blocked
(a wall).

Write a function that takes such a 2-dimensional array `A` and 2 vectors `P` and `Q` each represented by the `Vector` type found in `src/Vector.type.ts`, with `0,0` being the top left corner of the map (in the example below, `P = { x: 1, y: 0 }` and `Q = { x: 2, y: 3 }`), and returns the distance of the shortest path between those points, respecting the walls in the map.

eg. Given the map (where `.` is passable - `true`, and `#` is blocked - `false`)

```
.P...
.###.
.....
..Q..
.....
```

then `pathfind(A, P, Q)` should return `6`.

## What to do

1. Clone/Fork this repo
2. Implement the `pathfind` function in `src/pathfind.ts`
3. Feel free to add further test cases to `tests/pathfind.test.ts`

## Running the tests

Tests have been implemented using Jest and can be run by running `yarn test`.

## Comments Section

Please fill in the sections below after you complete the challenge.

### What I'm Pleased With
I'm pleased with my implemnentation and am happy to have had the opportunity to do this. I feel this has helped with my understanding of this particular pathfinding algorithm which I have found confusing in the past

### What I Would Have Done With More Time
This is my first time using Jest and it did prove a little confusing to me. I eventually managed to get it running and managed to do all my testing however with more time i would like to do some additional reading and sure up my understanding of Jest.