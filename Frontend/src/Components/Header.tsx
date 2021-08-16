import "./Header.css";
import logo from "../Assets/Images/logo512.png"
import magnifier from "../Assets/Images/magnifier.png"
import magnifier_on_focus from "../Assets/Images/magnifier_on_focus.png"

/**
 * 
 * @returns header
 */
function Header(){
    /**
     *  If current page isn't main, returns it to main. Else scrolls it up
     */
    function ScrollUpOrBackToMain(){
        if(window.location.href === 'http://127.0.0.1:3600/' || window.location.href === 'http://localhost:3600/')
            window.scrollTo({top: 0, behavior: "smooth"});
        else window.location.href = '/';
    }

    return (
        <form action = '/' method = 'get'>
            <header className = "header">
                    <button 
                    type = "button"
                    className = "logo-button"
                    onClick = {ScrollUpOrBackToMain}>
                        <text className = "logo-text">Theytube</text>
                    </button>

                <img src = {logo} className = "logo-image"/>

                <div className = "header-div-search">
                    <button className = "header-magnifier-button"
                    type = "submit">
                        <img src = {magnifier} className = "header-magnifier-img"
                        onMouseOver={e => (e.currentTarget.src = magnifier_on_focus)}
                        onMouseOut={e => (e.currentTarget.src = magnifier)}/>
                    </button>
                    <input className = "header-input"
                    type = "text"   
                    name = 's'
                    placeholder = "Search"/>
                </div>

                <header className = "header-shadow"/>
            </header>
        </form>
    );
}

export default Header;