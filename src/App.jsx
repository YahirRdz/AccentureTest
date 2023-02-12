import "./App.css";
import { Items, Details } from "./components"; // eslint-disable-line
import { Routes, Route } from "react-router-dom"; // eslint-disable-line
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // eslint-disable-line

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <header className="App-header px-10">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center mt-10 gap-6">
              <h3 className="text-orange-500 text-base">
                <span className="text-3xl">[</span> Making your life Easier
                <span className="text-3xl">]</span>
              </h3>
              <h1 className="text-4xl font-bold ">Discovering the World</h1>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="p-5">
              <button>edit</button>
            </div>
          </div>
          <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/" element={<Items />} />
          </Routes>
        </header>
      </QueryClientProvider>
    </div>
  );
}

export default App;
