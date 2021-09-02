const getUsers = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const users = await res.json();

    return users;
}

export default getUsers;