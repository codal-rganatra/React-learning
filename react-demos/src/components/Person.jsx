import React from 'react'

const Person = ({ name, age, email, address, phone, hobbies, isEmployed, skills, education, experience }) => {
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Email:{email}</h2>
            <h2>Address:{address}</h2>
            <h2>Phone:{phone}</h2>
            <p>Hobbies:{hobbies.join(", ")}</p>
            <p>Employed:{isEmployed ? "Yes" : "No"}</p>
            <p>Skills:{skills.join(", ")}</p>
            <h3>Education:</h3>
            <p>{name} has completed {education.degree} in {education.major} from {education.university} in {education.graduationYear}</p>
            <h3>Experience:</h3>
            {experience.map((job, index) => (
                <div key={index}>
                    <h4>Job title:{job.jobTitle}</h4>
                    <h5>Company: {job.company}</h5>
                    <p>Start date: {job.startDate}</p>
                    <p>End date: {job.endDate}</p>
                    <p>Responsibilities:</p>

                    {
                        job.responsibilities.map((resp, i) => (
                            <ul key ={i}>
                                <li key={i}>{resp}</li>
                            </ul>
                        ))
                    }

                </div>
            ))}
        </div>
    )
}

export default Person