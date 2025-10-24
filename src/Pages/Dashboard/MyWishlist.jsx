import { useEffect, useState, use } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import { playSoundAlert, playSoundSuccess } from "../Shared/soundEffect";
import { categoryColors } from "../Shared/colors";
import Loading from "../Shared/Loading";

const MyWishlist = () => {
  const { user } = use(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user?.email) {
        try {
          const token = await user.getIdToken();
          const res = await axios.get(
            `https://readly-server.vercel.app/wishlist?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setWishlist(res.data);
        } catch (error) {
          console.error("Failed to fetch wishlist:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWishlist();
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
    return <Loading />;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="card bg-warning shadow-xl border border-error p-12 text-center">
          <p className="text-primary/70 text-lg">No items in your wishlist.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="card bg-warning shadow-lg hover:shadow-xl border border-error transition-all"
            >
              <div className="card-body flex flex-row justify-between items-center">
                <div className="flex-1">
                  <Link to={`/blog-details/${item.blogId}`}>
                    <h3 className="text-xl font-semibold text-primary hover:text-secondary transition">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="mt-2 text-sm text-primary/70 space-y-1">
                    <p>
                      <span className="font-semibold">Category:</span>{" "}
                      <span
                        className="inline-block px-2 py-1 rounded-md text-white text-xs"
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
                  className="btn btn-error btn-sm"
                  title="Remove from wishlist"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
