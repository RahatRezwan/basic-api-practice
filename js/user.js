const url = "https://randomuser.me/api/?gender=male";

const loadUserFetch = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayUser(data.results[0]))
        .catch((error) => console.log(error)); //This function will catch error if there is any in the url
};

// Get data using an asyncronus function

const loadUserAsync = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    } catch (error) {
        //This function will catch error if there is any in the url
        console.log(error);
    }
};

const displayUser = (users) => {
    console.log(users);
};
