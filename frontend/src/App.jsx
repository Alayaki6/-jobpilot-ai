import JobList from "./components/JobList";

function App() {
  return (
    <div>
      <header>
        <h1>JobPilot AI</h1>
        <p>Find your next opportunity with smarter job searching.</p>
      </header>

      <main>
        <section>
          <h2>Welcome to JobPilot AI</h2>

          <p>
            Search for jobs, manage your applications, and get AI-powered
            assistance throughout your job search.
          </p>

          <button type="button">
            Explore Jobs
          </button>
        </section>

        <JobList />
      </main>
    </div>
  );
}

export default App;
