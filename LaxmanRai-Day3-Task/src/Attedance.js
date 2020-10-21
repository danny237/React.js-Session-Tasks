import React, { useState } from 'react'

export default function Attedance() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [attendee, setAttendee] = useState([])

    const submitAttendee = () => {
        setAttendee([...attendee, { name, phoneNumber }]);
        setName('');
        setPhoneNumber(null);
    }
    return (
        <div>
            {/* input name */}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />

            {/* input number */}
            <input
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            /><br />

            {/* button */}
            <button onClick={() => submitAttendee()}>Click</button>

            {/* list */}
            <ul>
                {
                    attendee.map((data, index) => (<li>
                        <h1>Name: {data.name}</h1>
                        <h1>Phone Number: {data.phoneNumber}</h1>
                    </li>))
                }
            </ul>
        </div>
    )
}
