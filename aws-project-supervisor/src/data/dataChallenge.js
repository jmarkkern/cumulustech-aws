let challengeData = [];

export const addChallengeData = (input) => {
  challengeData.push(input);
};

export const getChallengeData = () => {
  return challengeData;
};

export default challengeData;
