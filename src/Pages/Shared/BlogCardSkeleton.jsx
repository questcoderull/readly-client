import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
      {/* 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton height={200} width={"100%"} borderRadius={"12px"} />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton width={20} height={20} circle />
            <Skeleton width={20} />
          </div>

          {/* Title */}
          <Skeleton height={25} width={"80%"} />

          {/* Description */}
          <Skeleton count={3} height={14} />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton width={100} height={20} />
            <Skeleton width={70} height={24} borderRadius={9999} />
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton height={200} width={"100%"} borderRadius={"12px"} />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton width={20} height={20} circle />
            <Skeleton width={20} />
          </div>

          {/* Title */}
          <Skeleton height={25} width={"80%"} />

          {/* Description */}
          <Skeleton count={3} height={14} />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton width={100} height={20} />
            <Skeleton width={70} height={24} borderRadius={9999} />
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton height={200} width={"100%"} borderRadius={"12px"} />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton width={20} height={20} circle />
            <Skeleton width={20} />
          </div>

          {/* Title */}
          <Skeleton height={25} width={"80%"} />

          {/* Description */}
          <Skeleton count={3} height={14} />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton width={100} height={20} />
            <Skeleton width={70} height={24} borderRadius={9999} />
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton height={200} width={"100%"} borderRadius={"12px"} />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton width={20} height={20} circle />
            <Skeleton width={20} />
          </div>

          {/* Title */}
          <Skeleton height={25} width={"80%"} />

          {/* Description */}
          <Skeleton count={3} height={14} />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton width={100} height={20} />
            <Skeleton width={70} height={24} borderRadius={9999} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
