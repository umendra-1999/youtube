import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVideos from "./components/SearchedVideos";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchedVideos />,
      },
    ],
  },
]);

export default App;
