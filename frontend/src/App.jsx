import { useState } from "react";

import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("jobs");
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage("jobs");
  };

  const handleLogout = () => {
    localStorage.removeItem("jobpilot_token");
    setUser(null);
    setPage("jobs");
  };

  return (
    <div>
      <Navbar
        user={user}
        onJobs={() => setPage("jobs")}
        onLogin={() => setPage("login")}
        onRegister={() => setPage("register")}
        onLogout={handleLogout}
      />

      {page === "jobs" && (
        <>
          <header>
            <h1>JobPilot AI</h1>
            <p>
              Find your next opportunity with smarter job searching.
            </p>
          </header>

          <main>
            <section>
              <h2>Welcome to JobPilot AI</h2>

              <p>
                Search for jobs, manage applications, and get
                AI-powered assistance throughout your job search.
              </p>

              <button
                type="button"
                onClick={() => setPage("jobs")}
              >
                Explore Jobs
              </button>
            </section>

            <JobList />
          </main>
        </>
      )}

      {page === "login" && (
        <main>
          <Login onLogin={handleLogin} />
        </main>
      )}

      {page === "register" && (
        <main>
          <Register />
        </main>
      )}
    </div>
  );
}

export default App;
