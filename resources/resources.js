function getBestRoute(num) {
    var bestRoute;
    
    var minCost = 5000;
    var maxReward = -1000;

    for (let i = 0; i < num.length; i++) {
        let rewards = [];
        let reward = 0;
        let cost = 0;
        for (let j = 0; j < num[i].length; j++) {
            if (!rewards.includes(num[i][j].name)) {
                rewards.push(num[i][j].name);
                reward += parseInt(num[i][j].reward);
            }
            if (j > 0) {
                let lastCost = num[i][j - 1].to.find(obj => {
                    return obj[0] === num[i][j].name
                })[1];
                cost += parseInt(lastCost);
            }
        }
       
        if (parseInt(maxReward) < (reward - cost) || parseInt(maxReward) <= (reward - cost) && parseInt(minCost) < (cost)) {
            maxReward = reward - cost;
            minCost = cost;
            
            bestRoute = num[i];
        }

    }

    return bestRoute;
}