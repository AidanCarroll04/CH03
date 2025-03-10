import fetch from "node-fetch"

const routeHello = () => "Hello World, My Name is Aidan Carroll!";

const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (err) {
        return err;
    }

    const name = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return name;

}
export {routeHello, routeAPINames };