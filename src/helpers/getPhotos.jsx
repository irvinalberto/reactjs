const getPhotos = async () =>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(url);
    const photos = await res.json();

    return photos;
}

export default getPhotos;