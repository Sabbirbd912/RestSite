import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="container min-vh-100 d-flex flex-column">
      <Navbar setPage={setPage} />
      <div className="my-5">
        {page === 'home' && <Home />}
        {page === 'menu' && <Menu />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3 text-danger" href="#">Grand Restaurant</a>
        <div>
          <button className="btn btn-link me-3" onClick={() => setPage('home')}>Home</button>
          <button className="btn btn-link me-3" onClick={() => setPage('menu')}>Menu</button>
          <button className="btn btn-link me-3" onClick={() => setPage('about')}>About</button>
          <button className="btn btn-link" onClick={() => setPage('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="text-center bg-warning p-5 rounded shadow">
      <h1 className="display-4 fw-bold">Welcome to Flavor Fusion</h1>
      <p className="lead">Delicious Food, Great Ambience</p>
      <button className="btn btn-dark btn-lg">Explore Menu</button>
    </div>
  );
}

function Menu() {
  const items = [
    { name: "Classic Burger", price: "$12.99" },
    { name: "Spicy Tacos", price: "$10.50" },
    { name: "Veggie Lasagna", price: "$14.00" },
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h2>About Us</h2>
      <p>We blend flavor and freshness to craft a unique dining experience.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5 rounded-top">
      <p className="mb-0">&copy; {new Date().getFullYear()} Flavor Fusion</p>
    </footer>
  );
}

export default App;