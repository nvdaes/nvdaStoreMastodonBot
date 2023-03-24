module.exports = ({context}) => {
    console.log(`${context.job.steps.diff.outputs.content}`)
}