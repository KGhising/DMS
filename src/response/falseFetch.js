export const post  = async (url, data) => {
    // console.log(url,data);
    const response = await import(url+'');
    return response;
};

export const get = async (url) => {
    const response = await import(url+'');
    return response;
}