import React from 'react'
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";
import { Song } from "@/types";

export default async function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Playlist Video</h1>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="fle justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest video</h1>
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
];