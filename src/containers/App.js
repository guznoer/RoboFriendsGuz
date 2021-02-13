import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => ({
    searchfield: state.searchfield
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

function App(props){

    const [robots, setRobots] = useState([]);
    const {searchfield, onSearchChange} = props;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users);
            });
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> :
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);