import { useState } from 'react'

/* 
a function that handles on the item / card when clicked by user.
*/
function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

// the function matches the corresponding ids and imgs
function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/luffy_logo.png', stat: "" },
        { id: 1, img: '/img/luffy_logo.png', stat: "" },
        { id: 2, img: '/img/nami_logo.png', stat: "" },
        { id: 2, img: '/img/nami_logo.png', stat: "" },
        { id: 3, img: '/img/zoro_logo.png', stat: "" },
        { id: 3, img: '/img/zoro_logo.png', stat: "" },
        { id: 4, img: '/img/sanji_logo.jpg', stat: "" },
        { id: 4, img: '/img/sanji_logo.jpg', stat: "" },
        { id: 5, img: '/img/usopp_logo.png', stat: "" },
        { id: 5, img: '/img/usopp_logo.png', stat: "" },
        { id: 6, img: '/img/robin_logo.jpg', stat: "" },
        { id: 6, img: '/img/robin_logo.jpg', stat: "" },
        { id: 7, img: '/img/chopper_logo.jpg', stat: "" },
        { id: 7, img: '/img/chopper_logo.jpg', stat: "" },
        { id: 8, img: '/img/brook_logo.png', stat: "" },
        { id: 8, img: '/img/brook_logo.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    // sets a const with previous state
    const [prev, setPrev] = useState(-1)

    /*
    checks on the if else condition then sets the state to the
    current or previous state
    */
    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    // click event handler that checks and sets item
    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    // return the container with the mapped items
    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards