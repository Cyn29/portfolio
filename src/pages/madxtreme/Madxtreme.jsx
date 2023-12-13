import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image"; // Asegúrate de importar el componente Image

import login from "../../assets/detailedcard/madxtreme/login.png";
import register from "../../assets/detailedcard/madxtreme/register.png";
import contact from "../../assets/detailedcard/madxtreme/contact.png";
import detailedpage from "../../assets/detailedcard/madxtreme/detailedpage.png";
import gallery from "../../assets/detailedcard/madxtreme/gallery.png";

function MadxtremeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={login} alt="Login" fluid />
                <Carousel.Caption>
                    {/* Puedes agregar texto opcional si lo necesitas */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={register} alt="Register" fluid />
                <Carousel.Caption>
                    {/* Puedes agregar texto opcional si lo necesitas */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={contact} alt="Contact" fluid />
                <Carousel.Caption>
                    {/* Puedes agregar texto opcional si lo necesitas */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={detailedpage} alt="Detailed Page" fluid />
                <Carousel.Caption>
                    {/* Puedes agregar texto opcional si lo necesitas */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={gallery} alt="Gallery" fluid />
                <Carousel.Caption>
                    {/* Puedes agregar texto opcional si lo necesitas */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MadxtremeCarousel;
