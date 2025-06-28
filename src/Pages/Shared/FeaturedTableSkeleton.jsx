// FeaturedTableSkeleton.jsx

const FeaturedTableSkeleton = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-20 px-6 ">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#023047] tracking-wide">
        📌 Featured Blogs
      </h1>
      <div className="space-y-4 mt-8 px-12">
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-[#003049] text-white rounded-t-lg p-4 font-semibold">
          <div>TITLE</div>
          <div>CATEGORY</div>
          <div>AUTHOR NAME</div>
        </div>

        {/* Skeleton Rows */}
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 bg-white shadow rounded-xl p-4 animate-pulse"
          >
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4 ml-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTableSkeleton;
