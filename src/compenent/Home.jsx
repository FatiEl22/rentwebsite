import React from "react";
import { apartements } from "../data/apartements";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../Styles/Landing.css"
import { useSelector } from "react-redux";





const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'darkgrey',
    fontWeight: '30px',
    textAlign:'right',
 


  };
function Home() {
    const distination = useSelector(state => state.distination).toLowerCase()
    const Voyageurs = useSelector(state => state.Voyageurs)
    const dateStart = useSelector(state => state.dateStart)
    const dateEnd = useSelector(state => state.dateEnd)
    return (
        <section>
            <div className="row">
                {
                    apartements.filter(appart => {

                        if ((dateStart !== "") && (new Date(dateStart).getTime() < new Date(appart.dateStart).getTime())) {
                            return false
                        }
                        if ((dateEnd !== "") && (new Date(dateEnd).getTime() > new Date(appart.dateEnd).getTime())) {
                            return false
                        }
                        return (
                            appart.name.toLowerCase().indexOf(distination) !== -1 &&
                            appart.number >= Voyageurs
                        )
                    }).map(a => {
                        return (
                            <div className="col-4">
                            <Link to={'/appinfo/' + a.id} key={a.id} className='card' style={linkStyle}>
                                <div className="card__info " >
                                    <img src={a.img} alt="dd"></img>
                                    <div className="style"><h1 className="titlestyle">{a.name}</h1> <span>{a.rating} <FaStar color="yellow" fontSize={'25px'}/></span></div>
                                    <p>{a.prix}</p>
                                   
                                </div>
                            </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )

};
export default Home