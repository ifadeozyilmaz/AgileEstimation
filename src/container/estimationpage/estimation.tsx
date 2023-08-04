import {useSelector} from "react-redux";
import {State} from "../../store";
import {Fragment, useState} from "react";
import {CardTypes} from "../../enums";


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
                    Name:{username}
                </div>
                <div className="header">
                    Selected Card
                <div className="selected-card">
                    {show ?
                        ((selectedCard !== null) && <p>{selectedCard}</p> )
                    :'👍'
                    }
                </div>
                </div>
            </div>
            <div className="card">
                {numbers.map((number) => (
                    <div className="numbers"
                onClick={() => handleCardClick(number)}>
                        <h1>
                            {number}
                        </h1>
                    </div>
                ))}
            </div>
                <div className="btn">
                <button onClick={() => setShow(!show)}>Reveal</button>
                <button onClick={handleReset}>Reset</button>
                </div>
            </Fragment>
        )

}


