const randomUser = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
    const usersContainer = document.getElementById("users-container");
    for (const user of users) {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <h5>Email: ${user.email}</h5>
        <h5>Phone: ${user.phone}</h5>
        <h5>Location: ${user.location.city} ${user.location.country}</h5>
        <img src="${user.picture.large}">`;
        usersContainer.appendChild(userDiv);
    }
};
randomUser();
