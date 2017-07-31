module.exports = app => {
    console.log('Starting with start hook and close hook')
    app.beforeStart(() => {
        console.log('Starting...')
    })
    app.beforeClose(() => {
        console.log('closing...')
    })
}
