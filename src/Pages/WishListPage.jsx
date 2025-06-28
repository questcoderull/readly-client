import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item) => (
            <li key={item._id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
