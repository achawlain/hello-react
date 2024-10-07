const heading = React.createElement('h1', {id:'heading'}, [
    React.createElement('div', {id:'child'}, [  
        React.createElement('h1', {id:'heading'}, 'Hello world from React'),
        React.createElement('h2', {id:'heading'}, 'Hello world from React')
    ]),
    React.createElement('div', {id:'child2'}, [  
        React.createElement('h1', {id:'heading'}, 'Hello world from React'),
        React.createElement('h2', {id:'heading'}, 'Hello world from React')
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);