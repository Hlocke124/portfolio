import React from "react";

const ExperienceTimeline = ({experiences}) => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-30">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2024 — Present</time>
                    <div className="text-lg font-black">Lead Programmer - CSUN VEX Robotics Club</div>
                    Created auton and driver control programs for various VEX robots using VEX C++ and assisted new members in learning
                    how to program robots using the PROS development environment.
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline badge-accent">C++</div>
                        <div className="badge badge-outline badge-accent">PROS</div>
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">June 2025 — Sep 2025</time>
                    <div className="text-lg font-black">Intern - SFS2 Research Internship</div>
                    Developed machine learning algorithms and a program that logs the resource usage of various
                    workloads in a simulated data center environment and created a Python script to visualize the data.
                    Co-authored a research paper on the usage of machine learning algorithms to create energy-efficient
                    workload scheduling in data centers.
                    <br/>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline badge-accent">Java</div>
                        <div className="badge badge-outline badge-accent">Python</div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default ExperienceTimeline;