import { useEffect, useState, use } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import { playSoundAlert, playSoundSuccess } from "../Shared/soundEffect";
import { categoryColors } from "../Shared/colors";

const WishlistPage = () => {
  const { user } = use(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = user.accessToken;
  // console.log("accessToken from firebase", accessToken);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://readly-server.vercel.app/wishlist?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
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
      .delete(`https://readly-server.vercel.app/wishlist/${id}`)
      .then(() => {
        playSoundSuccess();
        toast.success("Removed from wishlist");
        setWishlist((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error("Failed to remove:", err);
        playSoundAlert();
        toast.error("Failed to remove");
      });
  };

  if (loading) {
    return (
      <div className="my-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1D3557]">
          Your Wishlist
        </h2>

        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className="relative p-6 mb-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md border border-blue-200"
          >
            {/* Delete Icon Skeleton */}
            <div className="absolute top-6 right-6 skeleton h-5 w-5 rounded"></div>

            {/* Title */}
            <div className="skeleton h-5 w-3/4 mb-4 rounded"></div>

            {/* Category */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="skeleton h-5 w-16 rounded-md"></div>
            </div>

            {/* Author */}
            <div className="skeleton h-4 w-24 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mb-20 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1D3557]">
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No items in your wishlist.</p>
      ) : (
        <ul className="space-y-6">
          {wishlist.map((item) => (
            <Fade direction="up" duration={800} key={item._id}>
              <li className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-blue-200 flex justify-between items-start gap-4 transition duration-300">
                <div className="flex-1">
                  <Link to={`/blog-details/${item.blogId}`}>
                    <h3 className="text-xl font-semibold text-[#1D3557] hover:text-[#FB8500] underline underline-offset-2 transition">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="mt-2 text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-semibold">Category:</span>{" "}
                      <span
                        className="inline-block px-2 py-[2px] rounded-md text-white text-xs"
                        style={{
                          backgroundColor:
                            categoryColors[item.category] || "#6B7280",
                        }}
                      >
                        {item.category}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Author:</span>{" "}
                      {item.authorName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 transition-transform hover:scale-110 cursor-pointer text-xl mt-1"
                  title="Remove from wishlist"
                >
                  <FaTrashAlt />
                </button>
              </li>
            </Fade>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
