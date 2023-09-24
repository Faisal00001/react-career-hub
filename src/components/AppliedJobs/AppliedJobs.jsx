import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([])
    const [displayJob, setDisplayJob] = useState([])
    const handleJobFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJob(appliedJob)
        }
        else if (filter === 'remote') {
            const remoteJob = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remoteJob)
        }
        else {
            const onsiteJob = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJob)
        }
    }
    useEffect(() => {
        const storedJobId = getStoredJobApplication()
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobId.includes(job.id))
            // console.log(jobApplied)
            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJob(jobsApplied)
            setDisplayJob(jobsApplied)

        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied :{appliedJob.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;