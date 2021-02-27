import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => ({
    searchfield: state.searchRobots.searchfield,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

function App(props){

    const {searchfield, robots, onSearchChange, isPending } = props;

    useEffect(() => {
        props.onRequestRobots();
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return isPending ? <h1>Loading...</h1> :
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