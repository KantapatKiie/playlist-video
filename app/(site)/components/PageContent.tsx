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
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 mt-4">
      {videos.map((item) => (
        <ReactPlayer
          className="videoFrame"
          url={item.video_path}
          playing={false}
          controls={true}
          light={true}
        />
      ))}
    </div>
  );
};

export default PageContent;
