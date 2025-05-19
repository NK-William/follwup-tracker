import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, TaskContent } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/track/:taskId"
            element={
              <div>
                <Navbar />
                <TaskContent />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
