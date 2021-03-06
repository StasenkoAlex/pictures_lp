const postData = async (url, data) => {
  let result = await fetch(url, {
    method: 'POST',
    body: data,
  });
  return await result.text();
};

const getData = async (url) => {
  let result = await fetch(url);
  if (!result.ok) {
    throw new Error('Could not get to' + url);
  }
  return await result.json();
};

export { postData, getData };
