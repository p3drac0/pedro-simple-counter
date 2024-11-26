import MyCard from '../components/Card.jsx'
import MyNavBar from '../components/MyNavBar.jsx'
import SimpleCard from '../components/SimpleCard.jsx'
import MyFooter from '../components/Footer.jsx'
const cardData=['Hola','Buen día','Como está','la chavalada']

const LandingPage = () => {

    return (<>
    <div class='container d-flex-column gap-3'>
        <MyNavBar></MyNavBar><SimpleCard></SimpleCard>
        <div class="d-flex justify-content-between gap-3">
    
    
    {cardData.map((Word)=>{
        return (
            
            <MyCard cardText={Word}></MyCard>
            
        )
    })}


    </div><MyFooter></MyFooter></div></>)

}

export default LandingPage