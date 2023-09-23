import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences } = job
    const handleApplyJob = () => {
        saveJobApplication(id)
        toast("You have applied successfully")
    }
    return (
        <div>
            <h2 className="text-center mb-28 mt-24 font-bold text-3xl">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3 space-y-2">
                    <p className="text-[#757575]"> <span className="font-bold text-black">Job Description:</span> {job_description}</p>
                    <p className="text-[#757575]"><span className="font-bold text-black">Job Responsibility:</span> {job_responsibility}</p>
                    <p> <span className="font-bold text-black">Educational Requirements:</span>
                        <p className="text-[#757575]">{educational_requirements}</p>
                    </p>
                    <p><span className="font-bold">Experiences:</span>
                        <p className="text-[#757575]">{experiences}</p>
                    </p>
                </div>
                <div className="border-2 md:col-span-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate delectus possimus animi reiciendis, aperiam inventore velit dolorum dignissimos voluptatibus ab.
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;