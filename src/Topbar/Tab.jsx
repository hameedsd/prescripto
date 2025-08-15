import { useEffect } from "react";

function Tab() {
  const enterFullscreen = () => {
    const elem = document.documentElement; // The whole page
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      // Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE11
      elem.msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Automatically enter fullscreen when the page loads
    const handleInteraction = () => {
      enterFullscreen();
      window.removeEventListener("click", handleInteraction); // Prevent multiple triggers
    };

    window.addEventListener("click", handleInteraction); // Wait for user interaction
    return () => window.removeEventListener("click", handleInteraction);
  }, []);
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        alert(
          "You have exited fullscreen mode. Please stay in fullscreen to continue."
        );
        window.close(); // Attempt to close the tab (might not work in some browsers)
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
      alert("Right-click is disabled on this page.");
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Fullscreen Mode</h1>
      <p>The tab is now in fullscreen. Exit fullscreen mode to leave.</p>
    </div>
  );
}

export default Tab;
