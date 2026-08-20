function JobList() {
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

  return (
    <section className="job-list">
      <h2>Latest Opportunities</h2>

      {jobs.map((job) => (
        <article className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>
            {job.location} · {job.type}
          </p>

          <button type="button">View Job</button>
        </article>
      ))}
    </section>
  );
}

export default JobList;
