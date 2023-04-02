
import { useNavigate } from "react-router-dom";

const Contact =() => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Contact Page</h2>
            {/* Write one para about seet Home */}
            <p>Home page is the first page of the website. It is the main page of the website. It is the first page that is displayed when a user opens the website. It is the page that is displayed when a user clicks on the home button of the website. It is the page that is displayed when a user clicks on the logo of the website. It is the page that is displayed when a user clicks on the back button of the website. It is the page that is displayed when a user clicks on the refresh button of the website. It is the page that is displayed when a user clicks on the forward button of the website. It is the page that is displayed when a user clicks on the search button of the browser. It is the page  </p>
<button onClick={()=>navigate(-1)}>back Button</button>
        </div>
    );
}

export default Contact;