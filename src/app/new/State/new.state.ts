import { jobs } from "src/app/Models/jobs.model";


export interface JobState {
    jobs: jobs[]
}

export const initialState: JobState = {
    jobs: [
        {
            company: "string",
            position: "string",
            author: "string",
            status: "string",
            description: "string",
            creadtedBy: "string",
            id:1
        },
    ]
}