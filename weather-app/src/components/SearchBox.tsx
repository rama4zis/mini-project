import { cn } from "@/utils/cn";
import React from "react";
import { MdSearch } from "react-icons/md";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className
      )}
      method="get"
      action=""
      role="search"
    >
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search location"
        className="w-full h-full px-3 py-2 rounded-l-md border-2 border-gray-200 focus:outline-none focus:border-gray-500 focus:ring-0 transition-all duration-200 ease-in-out  bg-gray-50 text-sm text-gray-700 placeholder-gray-400 "
      />
      <button className="m-0 py-2 px-4 rounded-r-md bg-sky-500 text-gray-700 hover:bg-gray-600 transition-all duration-200 ease-in-out  focus:outline-none focus:ring-0 hidden md:block h-full">
        <MdSearch className="text-3xl text-gray-500" />
      </button>
    </form>
  );
}
