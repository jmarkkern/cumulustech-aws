let challengeData = [];

export const addChallengeData = async (input) => {
  challengeData.push(input);
  console.log("this is from dataChallenge.js and I want to see of the data can be posted from here",
    { challengeData }
  )
  // Instead of pushing to local array, make a POST request to the server endpoint
  const response = await fetch('http://localhost:4000/challenge-data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }, // Required for JSON data
    body: JSON.stringify(challengeData),
  }).then(response => response.json()).then(data => {
    console.log(data.message)
    console.log(JSON.stringify(challengeData))
  });
};

export const getChallengeData = () => {
  return challengeData;
};

export default challengeData;
