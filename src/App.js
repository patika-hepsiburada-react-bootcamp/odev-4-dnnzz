import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import WeatherCard from "./components/WeatherCard";

const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Graphql & React Weather App</h1>
        <WeatherCard />
      </div>
    </ApolloProvider>
  );
}

export default App;
