import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 mt-26 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? We'd love to hear from you! Reach out to us at:
        </p>
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Corporate Email: contact@medullaflashcards.com
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
