
export const fetchData = async (url, setNames) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNames(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };