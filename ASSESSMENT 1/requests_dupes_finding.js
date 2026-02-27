const requests = [
    { userId: 1, endpoint: '/api/users', timestamp: 1000 },
    { userId: 1, endpoint: '/api/users', timestamp: 1003 },
    { userId: 2, endpoint: '/api/posts', timestamp: 1005 },
    { userId: 1, endpoint: '/api/users', timestamp: 7000 }
];

function finddups(reqs) {
    // sort
    const sorted = [...reqs].sort((a, b) => a.timestamp - b.timestamp);

    // group
    const groups = {};
    for (const req of sorted) {
        const key = req.userId + "_" + req.endpoint;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(req);
    }

    const result = [];

    //  dupes
    for (const key in groups) {
        const group = groups[key];
        if (group.length < 2) continue;
        const dupes = new Set();
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                const diff = group[j].timestamp - group[i].timestamp;

                if (diff <= 5000) {
                    dupes.add(group[i]);
                    dupes.add(group[j]);
                } else {
                    break;
                }
            }
        }
        if (dupes.size > 0) {
            result.push(Array.from(dupes));
        }
    }

    return result;
}

console.log(finddups(requests));