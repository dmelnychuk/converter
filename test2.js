// find some unknown, predetermined point in three-dimensional space, by
// least number of attempts using only a function that can return distance from
// any point you pass it to the unknown point you're looking for.
// To solve the problem, first implement the function f, which, accepting the coordinates of any
// of which point s(x, y, z), returns the distance between this point and the conditionally unknown, in advance
// an arbitrarily generated point by you r(x, y, z), where x, y, and z can be integers between
// 0 and 100.
// For example, for an arbitrarily generated point r(0, 0, 10), and passed to the point function
// s(0, 0, 0), the result of the function will be as follows:
// f(s) = 10 // the distance between s(0, 0, 0) and r(0, 0, 10) is 10
// Next, implement the algorithm itself for the task. The algorithm must find the coordinates
// arbitrarily generated point for the least number of calls to function f.
// Output data:
// Coordinates of an arbitrarily generated point r(x, y, z), coordinates of all points that were passed
// into function f by your algorithm, and the number of calls to function f for which it was found
// point r.
// {"result": {
// "random_point": {"x": 10, "y": 10, "z": 10},
// "search_points": [{"x": 0, "y": 1, "z": 2}, ..., {"x": 10, "y": 321, "z": 11} ],
// "calls": 85
// }}



