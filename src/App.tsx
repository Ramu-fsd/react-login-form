import { LoginForm } from './components/LoginForm';
import './App.css';

function App() {
  return (
    <main className="page-shell">
      <section className="login-layout" aria-labelledby="page-title">
        <div className="intro-panel">
          <span className="eyebrow">REACT + TYPESCRIPT PRACTICE</span>
          <h1 id="page-title">Welcome back.</h1>
          <p>A focused login form example built with reusable components, typed form state, and accessible validation.</p>
        </div>
        <LoginForm />
      </section>
      <footer className="page-footer">Demo interface · No credentials are sent to a server</footer>
    </main>
  );
}

export default App;