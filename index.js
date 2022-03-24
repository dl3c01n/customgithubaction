const core = require('@actions/core')
const github = require('@actions/github')

try {
    const name = core.getInput('name')
    core.setOutput('response', 'Hello à toi : '.concat(name))
} catch (error) {
    core.setFailed(error.message)
}       