import "./App.css";

function App() {
  return (
    <div className="page">

      <div className="form-container">

        <h1>Registration Form</h1>
        <p className="subtitle">Please fill in your details</p>

        <form>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Enter your address"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Enter your message"
              rows="3"
            ></textarea>
          </div>

          <button type="submit">Submit</button>

        </form>

      </div>

    </div>
  );
}

export default App;