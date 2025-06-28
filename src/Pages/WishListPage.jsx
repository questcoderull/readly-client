import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const WishlistPage = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/wishlist?email=${user.email}`)
        .then((res) => {
          setWishlist(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch wishlist:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:3000/wishlist/${id}`)
      .then(() => {
        toast.success("Removed from wishlist");
        setWishlist((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error("Failed to remove:", err);
        toast.error("Failed to remove");
      });
  };

  if (loading) {
    return (
      <div className="my-10">
        <div className="skeleton h-8 w-full mb-3"></div>
        <div className="skeleton h-8 w-full mb-3"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1D3557]">
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No items in your wishlist.</p>
      ) : (
        <ul className="space-y-5">
          {wishlist.map((item) => (
            <li
              key={item._id}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-200 flex justify-between items-start gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#023047] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Category:</span> {item.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Author:</span> {item.authorName}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 hover:text-red-700 transition-all duration-200 text-lg"
                title="Remove from wishlist"
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
