import { issuesFrom } from './functions/issuesFrom.js'

const soartIssues = async (data) => {
    console.log(data.labels)

    const tags = issuesFrom(data)

    console.log(tags)

    if (!tags) return
}

export { soartIssues }
