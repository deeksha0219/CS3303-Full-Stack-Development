import React, { useState } from "react";
import "./App.css";

function Header({ activePage, setActivePage }) {
  return (
    <header className="header">

      <div className="logo">
        <span>&lt;/&gt;</span> WebDev
      </div>

      <nav className="nav">
        <button
          className={activePage === "Home" ? "active" : ""}
          onClick={() => setActivePage("Home")}
        >
          Home
        </button>

        <button
          className={activePage === "Learned" ? "active" : ""}
          onClick={() => setActivePage("Learned")}
        >
          What I Learned
        </button>

        <button
          className={activePage === "Projects" ? "active" : ""}
          onClick={() => setActivePage("Projects")}
        >
          Projects
        </button>

        <button
          className={activePage === "API" ? "active" : ""}
          onClick={() => setActivePage("API")}
        >
          API Demo
        </button>

        <button
          className={activePage === "Contact" ? "active" : ""}
          onClick={() => setActivePage("Contact")}
        >
          Contact
        </button>
      </nav>

    </header>
  );
}

function Home({ setActivePage }) {
  return (
    <section className="home">

      <div className="hero-content">

        <p className="small-title">
          IBM SKILLSBUILD • WEB DEVELOPMENT
        </p>

        <h1>
          Web Development
          <br />
          <span>Fundamentals</span>
        </h1>

        <p className="hero-text">
          A learning portfolio showcasing the concepts,
          technologies and practical skills I gained while
          completing the IBM SkillsBuild Web Development
          Fundamentals course.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => setActivePage("Learned")}
          >
            Explore What I Learned →
          </button>

          <button
            className="secondary-btn"
            onClick={() => setActivePage("Certificate")}
          >
            View Certificate
          </button>

        </div>

      </div>

      <div className="hero-card">

        <div className="code-window">

          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>{`function Developer() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return "Keep Learning!";
}`}</pre>

        </div>

      </div>

    </section>
  );
}

function Learned() {

  const topics = [
    {
      icon: "🌐",
      title: "HTML",
      description:
        "Learned how to structure webpages using semantic HTML elements, forms, links, lists and multimedia."
    },
    {
      icon: "🎨",
      title: "CSS",
      description:
        "Learned styling, colors, typography, spacing, Flexbox, Grid and responsive layouts."
    },
    {
      icon: "⚡",
      title: "JavaScript",
      description:
        "Learned variables, functions, events, DOM manipulation, dynamic updates and form validation."
    },
    {
      icon: "⚛️",
      title: "React",
      description:
        "Learned components, props, state, event handling and reusable component-based UI development."
    },
    {
      icon: "🔗",
      title: "HTTP & APIs",
      description:
        "Learned how browsers communicate with servers using HTTP requests and responses and how APIs provide data."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Learned how to create layouts that adapt to desktops, tablets and mobile devices."
    }
  ];

  return (
    <section className="page-section">

      <div className="section-heading">
        <p>MY LEARNING</p>
        <h1>What I Learned</h1>
        <span>
          Key concepts and technologies covered during my
          web development learning journey.
        </span>
      </div>

      <div className="topic-grid">

        {topics.map((topic, index) => (

          <div className="topic-card" key={index}>

            <div className="topic-icon">
              {topic.icon}
            </div>

            <h2>{topic.title}</h2>

            <p>{topic.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Responsive Website",
      technology: "HTML • CSS • Flexbox • Grid",
      description:
        "A responsive webpage demonstrating alignment, spacing, Flexbox, CSS Grid and mobile-friendly layouts."
    },
    {
      number: "02",
      title: "Interactive Form",
      technology: "JavaScript • DOM • Validation",
      description:
        "A registration form that validates user input and dynamically displays information."
    },
    {
      number: "03",
      title: "API Data Viewer",
      technology: "JavaScript • Fetch • HTTP",
      description:
        "A webpage that sends an HTTP request to an API and displays the response dynamically."
    },
    {
      number: "04",
      title: "React Component Website",
      technology: "React • Components • State",
      description:
        "A component-based React application with reusable UI components and navigation."
    }
  ];

  return (
    <section className="page-section">

      <div className="section-heading">
        <p>MY WORK</p>
        <h1>Projects & Practice</h1>
        <span>
          Practical applications of the concepts I learned.
        </span>
      </div>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <h2>{project.title}</h2>

            <div className="technology">
              {project.technology}
            </div>

            <p>{project.description}</p>

            <button className="learn-btn">
              View Details →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

function APIDemo() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {

    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

  };

  return (
    <section className="page-section api-page">

      <div className="section-heading">

        <p>HTTP REQUEST • RESPONSE</p>

        <h1>API Demonstration</h1>

        <span>
          This section demonstrates how JavaScript sends an
          HTTP GET request and receives data from a server.
        </span>

      </div>

      <div className="api-container">

        <div className="request-box">

          <h3>HTTP Request</h3>

          <div className="request-line">
            <span>GET</span>
            https://jsonplaceholder.typicode.com/users/1
          </div>

          <button
            className="primary-btn"
            onClick={fetchUser}
          >
            {loading ? "Sending Request..." : "Send GET Request"}
          </button>

        </div>


        <div className="response-box">

          <h3>Server Response</h3>

          {!user && !loading && (
            <p className="empty">
              Click "Send GET Request" to receive data.
            </p>
          )}

          {loading && (
            <p className="loading">
              Waiting for server response...
            </p>
          )}

          {user && (
            <div className="user-data">

              <p>
                <strong>Status:</strong>
                <span className="success-status">
                  200 OK
                </span>
              </p>

              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}


function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="page-section contact-page">

      <div className="section-heading">

        <p>GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <span>
          This form demonstrates React state,
          event handling and form validation.
        </span>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="input-group">

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="input-group">

          <label>Message</label>

          <textarea
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

        </div>

        <button className="primary-btn" type="submit">
          Submit Message
        </button>

        {submitted && (
          <div className="success-message">
            ✓ Form submitted successfully!
          </div>
        )}

      </form>

    </section>
  );
}

function Certificate() {

  return (
    <section className="page-section certificate-page">

      <div className="section-heading">

        <p>ACHIEVEMENT</p>

        <h1>IBM SkillsBuild Certificate</h1>

        <span>
          Successfully completed Web Development Fundamentals.
        </span>

      </div>

      <div className="certificate-card">

        <div className="certificate-top">
          <strong>IBM SkillsBuild</strong>
          <span>Completion Certificate</span>
        </div>

        <div className="certificate-content">

          <div className="medal">
            
          </div>

          <p>This certificate is presented to</p>

          <h2>Deeksha</h2>

          <p>for the completion of</p>

          <h1>
            Web Development Fundamentals
          </h1>

          <p>
            Earn a credential!
          </p>

          <div className="certificate-date">
            Completion Date: 12 August 2026
          </div>

        </div>

      </div>

    </section>
  );
}

function Footer({ activePage, setActivePage }) {

  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>
            <span>&lt;/&gt;</span> WebDev
          </h2>

          <p>
            My Web Development Fundamentals
            learning portfolio.
          </p>
        </div>

        <div className="footer-links">

          <button onClick={() => setActivePage("Home")}>
            Home
          </button>

          <button onClick={() => setActivePage("Learned")}>
            What I Learned
          </button>

          <button onClick={() => setActivePage("Projects")}>
            Projects
          </button>

          <button onClick={() => setActivePage("Certificate")}>
            Certificate
          </button>

        </div>

      </div>

      <div className="copyright">
         2026 Web Development Fundamentals
      </div>

    </footer>
  );
}

function App() {

  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {

    switch (activePage) {

      case "Home":
        return <Home setActivePage={setActivePage} />;

      case "Learned":
        return <Learned />;

      case "Projects":
        return <Projects />;

      case "API":
        return <APIDemo />;

      case "Contact":
        return <Contact />;

      case "Certificate":
        return <Certificate />;

      default:
        return <Home setActivePage={setActivePage} />;

    }

  };

  return (

    <div className="app">

      <Header
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main>
        {renderPage()}
      </main>

      <Footer
        activePage={activePage}
        setActivePage={setActivePage}
      />

    </div>

  );
}

export default App;