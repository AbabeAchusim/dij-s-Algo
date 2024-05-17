function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    
    // Initialize distances with Infinity for all vertices except start
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
    }

    while (true) {
        let currentVertex = null;

        // Find the unvisited vertex with the smallest distance
        for (let vertex in graph) {
            if (!visited[vertex] && (currentVertex === null || distances[vertex] < distances[currentVertex])) {
                currentVertex = vertex;
            }
        }

        if (currentVertex === null) {
            break; // No more vertices to visit
        }

        visited[currentVertex] = true;

        // Update distances to neighbors of currentVertex
        for (let neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + weight;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
            }
        }
    }

    return distances;
}

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const startVertex = 'A';
console.log(dijkstra(graph, startVertex));
