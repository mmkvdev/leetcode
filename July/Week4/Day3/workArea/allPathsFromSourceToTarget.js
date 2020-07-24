/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const findPath = (current) => {
        if (graph[current].length === 0) return [
            [current]
        ]

        const result = []
        graph[current].map(next => {
            findPath(next).map(path => {
                result.push([current, ...path])
            })
        })

        return result
    }

    return findPath(0);
};

console.log(allPathsSourceTarget([
    [1, 2],
    [3],
    [3],
    []
]))