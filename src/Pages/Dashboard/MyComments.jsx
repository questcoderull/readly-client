import React, { useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Shared/Loading";
import { Link } from "react-router";
import useCommentStore from "../../stores/useCommentStore"; // Import Zustand store

const MyComments = () => {
  const { user } = use(AuthContext);

  // Use Zustand store
  const { myComments, loading, fetchMyComments } = useCommentStore();

  useEffect(() => {
    const loadComments = async () => {
      if (user) {
        const token = await user.getIdToken();
        await fetchMyComments(user.email, token);
      }
    };
    loadComments();
  }, [user, fetchMyComments]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">My Comments</h1>

      {myComments.length === 0 ? (
        <div className="card bg-warning shadow-xl border border-error p-12 text-center">
          <p className="text-primary/70 text-lg">
            You haven't made any comments yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {myComments.map((comment, index) => (
            <div
              key={index}
              className="card bg-warning shadow-lg border border-error hover:shadow-xl transition-all"
            >
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-warning">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="Profile" />
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center bg-primary text-info font-bold">
                          {user?.displayName?.charAt(0) || "U"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-primary">
                        {comment.userName || user?.displayName}
                      </h3>
                      <span className="text-xs text-primary/60">
                        {comment.timestamp
                          ? new Date(comment.timestamp).toLocaleDateString()
                          : "Recently"}
                      </span>
                    </div>
                    <p className="text-primary/80">{comment.comment}</p>
                    {comment.blogId && (
                      <Link
                        to={`/blog-details/${comment.blogId}`}
                        className="text-sm text-secondary hover:underline mt-2 inline-block"
                      >
                        View Blog →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComments;
