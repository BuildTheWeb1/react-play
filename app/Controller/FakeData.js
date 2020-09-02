import axios from "axios";

export let users = [];

async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    response.data.map(res => users.push(res));
  } catch (error) {
    console.error(error);
  }
}

getData();
