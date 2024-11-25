import MyCard from '../components/Card.jsx'
const cardData=['Hola','Buen día']

const LandingPage = () => {

    return (<>
    {cardData.map((Word)=>{
        return (
            <MyCard cardText={Word}></MyCard>
        )
    })}
    </>)

}

export default LandingPage