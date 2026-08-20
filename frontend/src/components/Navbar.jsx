function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        JobPilot AI
      </div>

      <div className="navbar-links">
        <button type="button">Jobs</button>
        <button type="button">Saved Jobs</button>
        <button type="button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
