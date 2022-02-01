import * as React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

var calculateTimeElapsed = () => {
  // Set total days of project.
  // (Use an online number of days calculator!)
 const projectDuration = 1096;
  // Work out days elapsed in project.
  const currentDate = new Date();
  const startDate = new Date("2021-10-01T24:00:00Z");
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  // Work out percentage of days elapsed, rounded up.
  const progress = Math.ceil((daysDiff * 100)/projectDuration);
  return progress;
}

const Progress = props => {
  return (
    <div>
      <h2 class="mt-2">{props.progressTitle}</h2>
      <div class="bar-progress">
        <ProgressBar now={calculateTimeElapsed()} />
        <p class="progress-start">October 2021 Kick-off</p>
        <p class="progress-end">October 2024</p>
      </div>
    </div>
  )
}

export default Progress
