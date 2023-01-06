import React, { Suspense, lazy, memo } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
const Dashboard = lazy(() => {
  return import("./components/Dashboard");
});
function App() {
  return (
    <div className="App">
      <Suspense fallback={<img className="app-logo" loading="lazy" src={logo} alt="logo" />}>
        {/* <Navbar /> */}
        <Navbar />
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
