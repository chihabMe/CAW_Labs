
function mean(scores) {
    if (scores.length === 0) return 0;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Exporting the function
module.exports = mean;
