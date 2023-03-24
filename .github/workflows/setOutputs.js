module.exports = ({context}) => {
    const diff = `${context.job.diff.outputs.content}`;
    console.log(diff);
}