const issuesMessageFormat = ({ data, type }) => {
    return {
        title: `New Issues: ${data?.project?.name}`,
        color: '#c90076',
        description: `The issues was opened by ${data?.user?.name}. With Title ${data?.object_attributes?.title}`,
        autor: `${data?.user?.name}`,
        autorImg: `${data?.user?.avatar_url}`,
        link: `${data?.object_attributes?.url}`,
    }
}

export { issuesMessageFormat }
