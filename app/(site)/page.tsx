import React from "react";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";
import { Song } from "@/types";

export default async function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="grid grid-rows-2 grid-flow-col gap-0">
          <div className="row-span-2 col-span-0">
            <h1 className="text-white text-3xl font-semibold">
              <a href="/">Main Page</a>
            </h1>
          </div>
          <div className="row-span-2 col-span-12">
            <h1 className="text-white text-3xl font-semibold">
              <a href="/videos">Video Page</a>
            </h1>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="fle justify-between items-center mt-12">
          <h1 className="text-white text-2xl font-semibold">Newest Video</h1>
        </div>
        <div>
          <PageContent videos={videoList} />
        </div>
      </div>
    </div>
  );
}

const videoList: Song[] = [
  {
    id: "1",
    title: "Video A",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "2",
    title: "Video B",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=hwNWx1GTSKo",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "3",
    title: "Video C",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=DYqE3M_xdCc",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "4",
    title: "Video D",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=vJoNqBZ9QlM",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "5",
    title: "Video D",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=g6bn6XrhYdc",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "6",
    title: "Video E",
    author: "Developer",
    video_path: "https://www.youtube.com/watch?v=8JbzXz_DzXQ",
    image_path:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
  },
];
