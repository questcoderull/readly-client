import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Link } from "react-router";
import { categoryColors } from "./Shared/colors";
import { Fade } from "react-awesome-reveal";
import FeaturedTableSkeleton from "./Shared/FeaturedTableSkeleton";
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdUnfoldMore,
  MdFeaturedPlayList,
} from "react-icons/md";

const FeaturedBlogs = () => {
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    fetch("https://readly-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        const topTen = data
          .sort((a, b) => b.descriptionLong.length - a.descriptionLong.length)
          .slice(0, 10);
        setFeaturedBlog(topTen);
        setLoading(false);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Author Name",
        accessorKey: "authorName",
      },
    ],
    []
  );

  const table = useReactTable({
    data: featuredBlog,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (loading) return <FeaturedTableSkeleton />;

  return (
    <div className="min-h-screen py-20 px-6">
      <h1 className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-12 text-primary tracking-wide">
        <MdFeaturedPlayList /> Featured Blogs
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-primary rounded-t-lg font-semibold text-white uppercase tracking-wide select-none px-6 py-3">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
                key={header.id}
                className={
                  header.column.id === "title"
                    ? "col-span-6 cursor-pointer flex items-center gap-1"
                    : "col-span-3 cursor-pointer flex items-center justify-center gap-1"
                }
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {header.column.getIsSorted() === "asc" ? (
                  <MdArrowDropUp size={16} />
                ) : header.column.getIsSorted() === "desc" ? (
                  <MdArrowDropDown size={16} />
                ) : (
                  <MdUnfoldMore size={16} />
                )}
              </div>
            ))
          )}
        </div>

        {/* Table Rows */}
        {table.getRowModel().rows.map((row) => {
          const blog = row.original;
          const categoryColor = categoryColors[blog.category] || "#6B7280";

          return (
            <Fade direction="up" duration={500} key={blog._id}>
              <Link
                to={`/blog-details/${blog._id}`}
                className="bg-warning grid grid-cols-1 md:grid-cols-12 gap-4  rounded-lg border border-error shadow hover:shadow-md transition-shadow duration-300 cursor-pointer px-6 py-5"
              >
                {/* Title */}
                <div className="col-span-6 text-primary font-medium text-lg break-words">
                  {blog.title}
                </div>

                {/* Category */}
                <div
                  className="col-span-3 text-white rounded-md flex items-center justify-center font-semibold"
                  style={{ backgroundColor: categoryColor }}
                >
                  {blog.category}
                </div>

                {/* Author */}
                <div className="col-span-3 text-primary rounded-md flex items-center justify-center font-semibold">
                  {blog.authorName}
                </div>
              </Link>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
