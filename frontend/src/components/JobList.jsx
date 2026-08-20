import { useState } from "react";

function JobList() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "JobPilot Demo",
      location: "Europe",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "JobPilot Demo",
      location: "Remote",
      type: "Internship",
    },
  ];

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

      {filteredJobs.length === 0 ? (
        <p className="no-results">No jobs found.</p>
      ) : (
        filteredJobs.map((job) => (
          <article className="job-card" key={job.id}>
            <h3>{job.title}</h3>

            <p>{job.company}</p>

            <p>
              {job.location} · {job.type}
            </p>

            <button type="button">
              View Job
            </button>
          </article>
        ))
      )}
    </section>
  );
}

export default JobList;
