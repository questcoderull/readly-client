import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter your email.");
    }

    // just show success toast
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail(""); // reset input field
  };

  return (
    <div className="bg-[#f0f9ff] py-16 px-4 md:px-10 rounded-lg shadow-md my-10">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#023047]">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700">
          Get the latest blog updates, tips, and tech stories delivered directly
          to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-md"
          />
          <button type="submit" className="btn btn-primary">
            <FaPaperPlane className="mr-2" />
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
