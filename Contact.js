import React from "react";

const Contact = () => {
  return (
    <div className="heading mx-auto my-10 max-w-3xl">
      <h1 className="font-bold text-2xl mb-4">Welcome To My Contact Page</h1>
      <div>
        <p>For any inquiries:</p>
        <ul className="list-disc ml-6">
          <li>Email: maheshchavhan956@.com</li>
          <li>Phone: +91 9529882007</li>
        </ul>
      </div> 
      <div>
        <form className="space-y-4">
          <label htmlFor="name">Name:</label>
          <input
            className="border border-solid p-2"
            type="text"
            id="name"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="border border-solid p-2"
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label htmlFor="contact">Contact:</label>
          <input
            className="border border-solid p-2"
            type="tel"
            id="contact"
            placeholder="Enter Your Contact"
            name="contact"
            required
          />
          <button
            className="border border-solid p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
