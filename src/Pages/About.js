
import { useNavigate } from "react-router-dom";
const About =() => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>About Page</h2>
            <p>About page is the second page of the website. It is the second page that is displayed when a user opens the website. It is the page that is displayed when a user clicks on the about button of the  is displayed when a user clicks on the about button of the mobile device. It is the page that is displayed when a user clicks on the about button of the laptop device. It is the page that is displayed when a user clicks on the about button of the tablet device. It is the page that is displayed when a user clicks on the about button of the desktop device. It is the page that is displayed when a user clicks on the about button of the mobile device. It is the page that is displayed when a user clicks on the about button of the laptop device. It is the page that is displayed when a user clicks on the about button of the table
                </p>
                <button onClick={()=>navigate("/contact")}>Contact Me</button>
        </div>
    );
}

export default About;