export const getYouthPopulation = () => {
    return window.axios.get('/api/youth/population')
      .then(data => {return data.data;})
      .catch(error => Promise.reject(error));
};

export const getMalePopulation = () => {
    return window.axios.get('/api/youth/population/male')
      .then(data => {return data.data;})
      .catch(error => Promise.reject(error));
};

export const getFemalePopulation = () => {
    return window.axios.get('/api/youth/population/female')
      .then(data => {return data.data;})
      .catch(error => Promise.reject(error));
};

export const getYears = () => {
    return window.axios.get('/api/youth/dimension/years')
      .then(data => {return data.data;})
      .catch(error => Promise.reject(error));
};