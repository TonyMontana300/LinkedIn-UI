import React from 'react'
import JobsSidebar from '../components/jobs/JobsSidebar.jsx'
import JobsMain from '../components/jobs/JobsMain.jsx'

const Jobs = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 3fr", gap: "20px", margin: "20px auto", maxWidth: "1200px"}}>
      <JobsSidebar />
      <JobsMain />
    </div>
  )
}

export default Jobs
