import "./menu.scss";
// import { Info, CastForEducationOutlined as Educ, Settings, Translate } from '@material-ui/icons'
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <li onClick={() => { setMenuOpen(!menuOpen) }}>
                    {/* <Info /> */}
                    <a href="#AboutMe" >About Me</a>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }}>
                    {/* <Educ /> */}
                    <a href="#Educations" >Education</a>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }}>
                    <a href="#Experiences" >Experiences</a>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }}>
                    {/* <Translate /> */}
                    <a href="#Languages" >Languages</a>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }}>
                    {/* <Settings /> */}
                    <a href="#Skills" >Skills</a>
                </li>
            </ul>
        </div>
    )
}
