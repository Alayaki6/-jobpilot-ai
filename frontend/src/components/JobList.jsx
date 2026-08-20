import { useEffect, useState } from "react";
import { getJobs } from "../api";
import JobDetails from "./JobDetails";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        setError("Unable to load jobs.");
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  if (selectedJob) {
    return (
      <JobDetails
        job={selectedJob}
        onBack={() => setSelectedJob(null)}
      />
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const searchTerm = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <section className="job-list">
      <h2>Latest Opportunities</h2>

      <input
        type="text"
        placeholder="Search jobs, companies or locations..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="job-search"
      />

      {loading && <p>Loading jobs...</p>}

      {error && <p className="no-results">{error}</p>}

      {!loading && !error && filteredJobs.length === 0 && (
        <p className="no-results">No jobs found.</p>
      )}

      {!loading &&
        !error &&
        filteredJobs.map((job) => (
          <article className="job-card" key={job.id}>
            <h3>{job.title}</h3>

            <p>{job.company}</p>

            <p>
              {job.location} · {job.employment_type || "Not specified"}
            </p>

            {job.salary && <p>{job.salary}</p>}

            <button
              type="button"
              onClick={() => setSelectedJob(job)}
            >
              View Job
            </button>
          </article>
        ))}
    </section>
  );
}

export default JobList;
