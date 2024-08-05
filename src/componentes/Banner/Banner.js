import banner from "../../img/banner.png"
import './banner.css'

function Banner() {
    return(
        <header className="banner">
            <img src={banner} alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner