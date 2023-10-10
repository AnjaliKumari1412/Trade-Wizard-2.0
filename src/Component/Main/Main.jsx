import React from 'react'
import Axios from 'axios'
import "./Main.css"
import { HiMiniBars3BottomLeft as Bars } from "react-icons/hi2"
import { AiOutlineDollarCircle as Dollar, AiOutlineSearch as Search } from "react-icons/ai"
import Stock_card from './Stock_card'
export default function Main() {
    // const 
    const [Stock, set_stock] = React.useState([])
    const Stock_ = React.useRef([])
    const counter = React.useRef(0)
    const [menu_status, change_status] = React.useState(false)
    const [card_data, set_data] = React.useState({ head: "Stock head", avg: "Day average", up: "Day up", down: "Day down" })
    async function Stocks() {
        try {
            // const date=new Date();
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = (currentDate.getDate() - 1).toString().padStart(2, '0');
            const date = `${year}-${month}-${day}`;
            const response = await Axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}?adjusted=true&apiKey=UT0U72RKnzmaVNpuabCHYmFMmqWXkUJi&limit=10
            `)
            console.log(response.data.results)
            for (const element in response.data.results) {
                const card_data = {
                    head: response.data.results[element].T,
                    // avg: response.data.results[element].T,
                    up: response.data.results[element].h,
                    down: response.data.results[element].l
                };
                Stock_.current.push(<Stock_card value={card_data} />);
                set_stock([...Stock_.current]);

            }
        } catch (error) {
            console.error(error);
        }

    }
    // React.useEffect(() => {
    //     Stocks()
    // }, [])
    function open_menu() {
        const target_doc = document.querySelector(".card")
        if (menu_status === false) {
            console.log("Running")
            target_doc.style.display = "flex"
            setTimeout(() => {
                target_doc.style.height = "25vh"
                target_doc.style.opacity = "1"
            }, 10)
            change_status(true)
        }
        else if (menu_status === true) {
            target_doc.style.height = "0vh"
            target_doc.style.opacity = "0"
            setTimeout(() => {
                target_doc.style.display = "none"
            }, 500)
            change_status(false)
        }
    }
    // React.useEffect(() => {
    //     // start_up()
    //     Stocks();
    // }, [])
    return (
        <div id="Mainpage">
            <div id="header">
                <div id="header_heading">
                    <Dollar id="logo" data-text="web_text" />
                    <li id="heading" data-text="web_text">Trade Wizard</li>
                </div>
                <div id="nav">
                    <div className="nav_item" data-text="web_text">My Proflie</div>
                    <div className="nav_item" data-text="web_text">News</div>
                    <div className="nav_item" data-text="web_text">Blogs</div>

                    <div class="Btn">

                        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <p class="text">Logout</p>
                    </div>

                </div>
                <Bars data-text="web_text" onClick={open_menu} id="dropbutton" />
            </div>

            <div className="card">
                <div className="nav_item" data-text="web_text">My Proflie</div>
                <div className="nav_item" data-text="web_text">News</div>
                <div className="nav_item" data-text="web_text">Blogs</div>

                <div class="Btn">

                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                    <p class="text">Logout</p>
                </div>

            </div>
            <div class="input-wrapper">
                <div id="inner_search">
                    <input class="input-box" type="text" placeholder="Search here.." />
                    <Search id="search_btn" />
                </div>
                <span class="underline"></span>
            </div>
            <div id="Stock_div">
                {Stock}
            </div>
        </div>


    )
}
