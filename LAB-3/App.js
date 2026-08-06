import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">Instagram</div>

        <div className="header-icons">
          <span>♡</span>
          <span>✉</span>
        </div>
      </header>

      {/* Body */}
      <main className="body">
        <h2>Home Screen</h2>
        <p>Header and Footer Replication</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>🏠</span>
        <span>🔍</span>
        <span>➕</span>
        <span>🎬</span>
        <span>👤</span>
      </footer>

    </div>
  );
}

export default App;
