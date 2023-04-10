export const exerciseOptions = {
    method: 'GET',
    headers: {
      //'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Key': '1e96c4885dmshaf7b7a2243130c4p1d61a1jsna5361aab89c8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;

}