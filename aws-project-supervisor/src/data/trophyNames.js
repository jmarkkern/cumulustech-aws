let trophyNameData = [];

export const addTrophyNameData =  async (input) => {

    if (input !== null) {
    trophyNameData.push(input);}

  // Instead of pushing to local array, make a POST request to the server endpoint
    const response = await fetch('http://localhost:4000/trophy-data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }, // Required for JSON data
    body: JSON.stringify(trophyNameData),
  }).then(response => response.json()).then(data => {
    console.log(data.message)
    console.log(JSON.stringify(trophyNameData))
  });
    
}

export const getTrophyData = () => {
  return trophyNameData;
};
export const setTrophyData = (data) => {
  trophyNameData = data;}




export { trophyNameData };