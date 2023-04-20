# 🚀 Release v{{buildDetails.buildNumber}}

## Associated Pull Requests ({{pullRequests.length}})
{{#forEach pullRequests}}
* Pull Request [#{{this.pullRequestId}} {{this.title}}]({{replace (replace this.url "_apis/git/repositories" "_git") "pullRequests" "pullRequest"}})
{{/forEach}}

## Associated Azure Board Items ({{workItems.length}})
{{#forEach this.workItems}}
*  Item [#{{this.id}} {{lookup this.fields 'System.Title'}}]({{replace this.url "_apis/wit/workItems" "_workitems/edit"}})
{{/forEach}}