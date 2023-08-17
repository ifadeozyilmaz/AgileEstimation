import {useSelector} from "react-redux";
import {State} from "../../store";
import {Fragment, useState} from "react";
import {CardTypes} from "../../enums";
import {useNavigate} from "react-router-dom";
import {RouteTypes} from "../../enums/routes";


const numbers: CardTypes[] = [
    CardTypes.UNKNOWN,
    CardTypes.ONE,
    CardTypes.TWO,
    CardTypes.THREE,
    CardTypes.FIVE,
    CardTypes.EIGHT,
    CardTypes.THIRTEEN,
    CardTypes.TWENTY_ONE,
    CardTypes.COFFEE,
];


export function Estimation() {
    const [selectedCard, setSelectedCard] = useState<CardTypes | null>(null);
    const navigate = useNavigate();
    const handleCardClick = (card: CardTypes) => {
        setSelectedCard(card);
        setShow(false);
    };
    const handleReset = () => {
        setSelectedCard(null);
        setShow(true);
    };
    /**
     * The state is show the selected card
     *@type {boolean}
     */
    const [show,setShow] = useState(true);
    const username = useSelector((state: State) => state.user.username);
    return (
            <Fragment>
            <div className="container">
                <div className="header">
                    Users:
                   <div className="users">
                        {username.map((user) => (
                            <li key={user}>{user}</li>
                        ))}
                   </div>
                </div>
                <div className="header">
                    Selected Card
                <div className="selected-card">
                    {show ?
                        <p>{selectedCard}</p>
                        :<p>👍</p>
                    }
                </div>
                </div>
            </div>
            <div className="card">
                {numbers.map((number,item) => (
                    <div key={item} className="numbers"
                onClick={() => handleCardClick(number)}>
                        <h1>
                            {number}
                        </h1>
                    </div>
                ))}
            </div>
                <div className="btn">
                <button onClick={() => setShow((selectedCard !==null)===!show)}>Reveal</button>
                <button onClick={handleReset}>Reset</button>
                    <button onClick={()=>navigate(RouteTypes.Home)}>Exit</button>
                </div>
            </Fragment>
        )
}



