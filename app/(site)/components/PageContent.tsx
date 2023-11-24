"use client";

import { Song } from "@/types";
import ReactPlayer from "react-player";

interface Props {
  videos: Song[];
}

const PageContent = ({ videos }: Props) => {
  if (videos.length === 0) {
    return <div className="mt-4 text-neutral-400">No video available.</div>;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 m-4"
      style={{
        placeItems: "center",
      }}
    >
      {videos.map((item, index) => (
        <ReactPlayer
          key={index}
          className="videoFrame"
          url={item.video_path}
          playing={false}
          controls={true}
          light={true}
          width={"90%"}
        />
      ))}
    </div>
  );
};

export default PageContent;
