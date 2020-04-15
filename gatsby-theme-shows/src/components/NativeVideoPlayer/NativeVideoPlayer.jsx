import React from "react";

export default function NativeVideoPlayer({ src, poster }) {
  return (
    <video controls width="100%" preload="metadata" poster={poster} src={src}>
      <track default kind="captions" />
    </video>
  );
}
