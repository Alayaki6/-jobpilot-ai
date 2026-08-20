function Navbar({
  user,
  onJobs,
  onLogin,
  onRegister,
  onLogout,
}) {
  return (
    <nav className="navbar">
      <button
        type="button"
        className="navbar-brand"
        onClick={onJobs}
      >
        JobPilot AI
      </button>

      <div className="navbar-links">
        <button type="button" onClick={onJobs}>
          Jobs
        </button>

        {user ? (
          <>
            <span className="navbar-user">
              Hi, {user.username}
            </span>

            <button type="button" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={onLogin}>
              Login
            </button>

            <button type="button" onClick={onRegister}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
