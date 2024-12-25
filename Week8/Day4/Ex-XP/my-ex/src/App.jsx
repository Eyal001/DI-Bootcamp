import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";
import Exercise4 from "./Components/Exercise4";
import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import PostList from "./Components/PostList";
import ProfileScreen from "./Components/ProfileScreen";
import ShopScreen from "./Components/ShopScreen";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        ></Route>
        <Route path="/ex2" element={<PostList />}></Route>
        <Route
          path="/ex3"
          element={
            <>
              <Example1 />
              <Example2 />
              <Example3 />
            </>
          }
        ></Route>
        <Route path="/ex4" element={<Exercise4 />}></Route>
      </Routes>
    </>
  );
}

export default App;
