import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import FlightSearch from "./pages/flight-search/FlightSearch";
import FlightList from "./pages/flight-list/FlightList";
import Error from "./pages/error/Error";
import Success from "./pages/success/Success";
import "./app.css";

import "./fonts/MuseoSans-100.otf";
import "./fonts/MuseoSans-300.otf";
import "./fonts/MuseoSans_500.otf";
import "./fonts/MuseoSans_700.otf";
import "./fonts/MuseoSans_900.otf";

import theme from "./theme";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/flights" element={<FlightList />} />
          <Route path="/error" element={<Error />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<FlightSearch />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
