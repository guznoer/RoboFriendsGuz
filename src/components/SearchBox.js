const SearchBox = ({ searchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search Robots"
            onChange={searchChange}
            className="bg-light-blue ba bw1 b--light-blue pa2 ma3"
        />
    )
}

export default SearchBox;