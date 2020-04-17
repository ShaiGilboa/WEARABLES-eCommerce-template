export const saveToLocalStorage = (key, data) => {
  try {
    const stringifyData = JSON.stringify(data);    
    localStorage.setItem(key, stringifyData);
  } catch (err) {
    console.error('err in saving data to local storage:',err);
  }
}


export const getFromLocalStorage = (key) => {
  try {
    const stringifyData = localStorage.getItem(key);
    if(stringifyData) {
      const jsonData = JSON.parse(stringifyData);
      return jsonData;
    };
    return null;
  } catch (err) {
    return null;
  }
}