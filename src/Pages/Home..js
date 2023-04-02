
import { useNavigate } from "react-router-dom";

const Home =() => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>Home Page</h2>
            <p>Home page is the first page of the website. It is the main page of the website. It is the first page that is displaye logo of the website. It is the page that is displayed when a user clicks on the back button of the website. It is the page that is displayed when a user clicks on the refresh button of the website. It is the page that is displayed when a user clicks on the forward button of the website. It is the page that is displayed when a user clicks on the search button of the website. It is the page that is displayed when a user clicks on the bookmark button of the website. It is the page that is displayed when a user clicks on the history button of the website. It is the page that is displayed when a user clicks on the home button of the browser. It is the page that is displayed when a user clicks on the back button of the browser. It is the page that is displayed when a user clicks on the refresh button of the browser. It is the page that is displayed when a user clicks on the forward button of the browser. It is the page that is displayed when a user clicks on the search  </p>
<button onClick={()=>navigate("contact")}>Contact Me</button>
        </div>
    );
}

export default Home;