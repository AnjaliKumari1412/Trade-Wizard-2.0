import React from 'react'

export default function Stock_card({ value }) {
    return (
        <>
            <div class="card_">
                <h1 >{value.head}</h1>
                <div class="card2">
                    <h1>{value.head}</h1>
                    <ul>
                        <li>{value.up}</li>
                        <li>{value.down}</li>
                        <li>{value.avg}</li>
                    </ul>
                    <button>
                        <span>Read More</span>
                    </button>
                </div>
            </div>
        </>
    )
}
