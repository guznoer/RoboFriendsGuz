import Card from './Card';

const CardList = ({ robots }) => {

    const cardArray = robots.map((robot, i) => {
        return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
    })

    return (
        <>
            {cardArray}
        </>
    );
}

export default CardList;