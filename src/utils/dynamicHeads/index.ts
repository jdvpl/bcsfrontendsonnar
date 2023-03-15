export const parseHeadProperties = (option: string) => {
    switch (option) {
        case '/':
            return {
                description: "",
                title: "Vivienda"
            }
        default:
            return {
                description: "",
                title: parseToTitleCase(option?.replaceAll('/', ' ').replaceAll('-',' '))
            }
    }
}

export const parseToTitleCase = (str: string) => {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    })
}