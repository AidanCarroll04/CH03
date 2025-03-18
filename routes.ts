import fetch from "node-fetch"

const routeHello = (): string => "Hello World, My Name is Aidan Carroll!";

const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType [];
    try {
        const response = await fetch(url);
        data = await response.json() as responseItemType[];
    } catch (err) {
        return err;
    }

    const name = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return name;

}
const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query)

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
export {routeHello, routeAPINames, routeWeather };