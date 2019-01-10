function Person(){
    return (
        <div className="person">
            <h1>Sandro</h1>
            <p>Your age: 28</p>
        </div>
    );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));
