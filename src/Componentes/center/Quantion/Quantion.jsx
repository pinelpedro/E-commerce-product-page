import { useState } from "react"

import minus from '../../../images/icon-minus.svg'
import plus from '../../../images/icon-plus.svg'

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'hsl(223, 64%, 98%)',
    width: '100%'
    

}

const button = {
    backgroundColor: 'hsl(223, 64%, 98%)',
}

const p = {
    fontSize: '20px',
}

function Quantion() {
    const [quant, setQuant] = useState(0);

    return (
        <div  style={style}>
            <button style={button} onClick={() => { quant<=0?setQuant(0): setQuant(quant - 1) }}><img src={minus} alt="menos"></img></button>
            <p style={p}>{quant}</p>
            <button style={button} onClick={() => { setQuant(quant + 1) }}><img src={plus} alt="plus"></img></button>
        </div>
    )
}

export default Quantion;
