import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
      {/* 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-warning border border-error rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton
            baseColor="var(--color-success-content)"
            height={200}
            width={"100%"}
            borderRadius={"12px"}
          />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={20}
              height={20}
              circle
            />
            <Skeleton baseColor="var(--color-success-content)" width={20} />
          </div>

          {/* Title */}
          <Skeleton
            baseColor="var(--color-success-content)"
            height={25}
            width={"80%"}
          />

          {/* Description */}
          <Skeleton
            baseColor="var(--color-success-content)"
            count={3}
            height={14}
          />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={100}
              height={20}
            />
            <Skeleton
              baseColor="var(--color-success-content)"
              width={70}
              height={24}
              borderRadius={9999}
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-warning border border-error rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton
            baseColor="var(--color-success-content)"
            height={200}
            width={"100%"}
            borderRadius={"12px"}
          />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={20}
              height={20}
              circle
            />
            <Skeleton baseColor="var(--color-success-content)" width={20} />
          </div>

          {/* Title */}
          <Skeleton
            baseColor="var(--color-success-content)"
            height={25}
            width={"80%"}
          />

          {/* Description */}
          <Skeleton
            baseColor="var(--color-success-content)"
            count={3}
            height={14}
          />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={100}
              height={20}
            />
            <Skeleton
              baseColor="var(--color-success-content)"
              width={70}
              height={24}
              borderRadius={9999}
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-warning border border-error rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton
            baseColor="var(--color-success-content)"
            height={200}
            width={"100%"}
            borderRadius={"12px"}
          />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={20}
              height={20}
              circle
            />
            <Skeleton baseColor="var(--color-success-content)" width={20} />
          </div>

          {/* Title */}
          <Skeleton
            baseColor="var(--color-success-content)"
            height={25}
            width={"80%"}
          />

          {/* Description */}
          <Skeleton
            baseColor="var(--color-success-content)"
            count={3}
            height={14}
          />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={100}
              height={20}
            />
            <Skeleton
              baseColor="var(--color-success-content)"
              width={70}
              height={24}
              borderRadius={9999}
            />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="flex flex-col sm:flex-row items-center p-4 bg-warning border border-error rounded-2xl shadow gap-5 transition">
        {/* Image Skeleton */}
        <div className="w-full sm:w-[220px] h-[200px]">
          <Skeleton
            baseColor="var(--color-success-content)"
            height={200}
            width={"100%"}
            borderRadius={"12px"}
          />
        </div>

        {/* Text Skeleton */}
        <div className="w-full space-y-3">
          {/* Like */}
          <div className="flex justify-end items-center gap-1">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={20}
              height={20}
              circle
            />
            <Skeleton baseColor="var(--color-success-content)" width={20} />
          </div>

          {/* Title */}
          <Skeleton
            baseColor="var(--color-success-content)"
            height={25}
            width={"80%"}
          />

          {/* Description */}
          <Skeleton
            baseColor="var(--color-success-content)"
            count={3}
            height={14}
          />

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton
              baseColor="var(--color-success-content)"
              width={100}
              height={20}
            />
            <Skeleton
              baseColor="var(--color-success-content)"
              width={70}
              height={24}
              borderRadius={9999}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
