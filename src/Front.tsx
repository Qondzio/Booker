import BackgroundImage from '/front-background.jpg'
import './styles/front.css'
import SearchIcon from './assets/search-icon.svg'

function Front(){
    return (
        <div className='front' style={{backgroundImage: ` url(${BackgroundImage})`}}>
            <header>
                <h1>Booker</h1>
            </header>
            <div className='search'>
                <h2>Find your favourite barber</h2>
                <h4>Type location or name</h4>
                <form action="" onSubmit={e=>e.preventDefault()}>
                    <img src={SearchIcon} alt="search-icon" id='search-icon' />
                    <input type="text" size={40}/>
                </form>
            </div>
        </div>
    )
}

export default Front