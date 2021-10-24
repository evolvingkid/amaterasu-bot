// * this functions will soart the issues with the tags.
// the main issues tag type are 'mobile', 'web', 'servers'.
// ? params: data => will take the body from webhooks
const issuesFrom = (data) => {
    const tags = data.labels

    const typeTags = ['mobile', 'web', 'server']

    for (let index = 0; index < tags.length; index++) {
        if (typeTags.includes(tags[index].title)) return tags[index].title
    }
}

export { issuesFrom }
