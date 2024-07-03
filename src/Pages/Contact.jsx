import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, resetForm } from '../features/contact/contactSlice';

function Contact() {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state) => state.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to backend)
    console.log({ name, email, message });
    dispatch(resetForm());
  };

  return (
    <div className="container mb-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(e) => dispatch(setName(e.target.value))} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => dispatch(setEmail(e.target.value))} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="5" 
            value={message} 
            onChange={(e) => dispatch(setMessage(e.target.value))} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h3>Our Contact Information</h3>
        <p>
          Feel free to reach out to us via email or phone if you have any questions or inquiries.
        </p>
        <ul>
          <li>Email: info@tanahlongsor.com</li>
          <li>Phone: +62 123 456 7890</li>
        </ul>
        <p>
          Address:<br />
          Jalan Universitas Dian Nuswantoro No. 1, Semarang, Indonesia
        </p>
      </div>

      <div className="mt-5">
        <h3>Connect with Us on Social Media</h3>
        <p>Stay updated and connect with us through our social media channels:</p>
        <ul>
          <li><a href="https://facebook.com/tanahlongsor" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/tanahlongsor" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/tanahlongsor" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
