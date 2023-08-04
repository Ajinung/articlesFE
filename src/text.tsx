import io from "socket.io-client"
import React, { useState, useEffect } from 'react'
import InputEmoji from "react-input-emoji";


const url: string = "http://localhost:4455"
const socket = io(url)
const App = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [text, setText] = useState("")
    const [data, setData] = useState<any>([])

    const onRoom = () => {
        if (room !== "" && name !== "") {
            socket.emit("join-room", room)
        }
    }

    const HandleChat = async () => {

        const sendData = {
            room,
            text,
            name,
            date: new Date(Date.now()).getHours() + "hrs : " + new Date(Date.now()).getMinutes() + "mins"
        }

        await socket.emit("sendToBack", sendData)
        console.log('sender: ', sendData)
        setData((el: any) => {
            return [...el, sendData]
        })
    }

    const building = () => {
        socket.on("receiveData", mgs => {
            console.log('single: ', mgs)
            setData((el: any) => {
                return [...el, mgs]
            })
        })
    }

    useEffect(() => {
        building()
    }, [socket])

    // console.log("Reading data: ", data)

    return (
        <div>

            <br />
            <br />

            <center>
                <input placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input placeholder="Enter Room" value={room} onChange={(e) => { setRoom(e.target.value) }} />
                <button
                    onClick={onRoom}
                >Enter</button>
            </center>

            <br />
            <br />
            <br />
            <div>
                <center>
                    <div style={{ width: "300px" }}>
                        <div>Header</div>
                        <div>
                            {
                                data?.map((props: any, i: number) => (
                                    <div key={i}>{props.text}</div>
                                ))
                            }
                        </div>
                        <br />
                        <div>
                            <InputEmoji
                                value={text}
                                onChange={setText}
                                onEnter={HandleChat}
                                cleanOnEnter
                                placeholder="Type a message"
                            />
                        </div>

                    </div>
                </center>
            </div>
        </div>
    )
}

export default App