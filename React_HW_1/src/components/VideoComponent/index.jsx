import video from "../../assets/video/medium.mp4";

function VideoComponent() {
  return (
    <video controls width="400">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default VideoComponent;