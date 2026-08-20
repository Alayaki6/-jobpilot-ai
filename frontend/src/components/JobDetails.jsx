function JobDetails({ job, onBack }) {
  if (!job) {
    return (
      <section>
        <h2>Job not found</h2>
        <button type="button" onClick={onBack}>
          Back to Jobs
        </button>
      </section>
    );
  }

  return (
    <section className="job-details">
      <button type="button" onClick={onBack}>
        ← Back to Jobs
      </button>

      <h2>{job.title}</h2>

      <h3>{job.company}</h3>

      <p>
        {job.location} · {job.employment_type || "Not specified"}
      </p>

      {job.salary && <p>{job.salary}</p>}

      <div className="job-description">
        <h3>Job Description</h3>
        <p>{job.description}</p>
      </div>

      {job.application_url && (
        <a
          href={job.application_url}
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            Apply for this Job
          </button>
        </a>
      )}
    </section>
  );
}

export default JobDetails;
