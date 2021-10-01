import * as React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progress = (props) => {
  return (
    <div>
      <h2 class="mt-2">{props.progressTitle}</h2>
      <div class="bar-progress">
        <ProgressBar now={props.progress} />
        <p class="progress-start">October 2021 Kick-off</p>
        <p class="progress-end">October 2024</p>
      </div>
    </div>
  )
}

export default Progress
