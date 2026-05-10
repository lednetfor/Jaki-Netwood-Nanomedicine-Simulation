function BacterialVideo() {
  return (
    <div className="video-container">
      <h3>Live Nano-Bot Simulation</h3>
      <video width="100%" controls autoPlay muted loop>
        <source src="path/to/your/simulation-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Monitoring Agent: MTB-01 in Real-time</p>
    </div>
  );
}
