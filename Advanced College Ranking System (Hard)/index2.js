
const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
];

function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    let filteredColleges = colleges.filter(college => 
        college.location === preferredLocation && college.fees <= maxFees
    );
    filteredColleges.forEach(college => {
        college.score = (college.ranking * rankingWeight) + (college.fees / maxFees * feesWeight);
    });
    filteredColleges.sort((a, b) => a.score - b.score);
    filteredColleges.forEach(college => {
        console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`);
    });
}
const preferredLocation = "New York";
const maxFees = 20000;
const rankingWeight = 2;
const feesWeight = 1;
rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);
