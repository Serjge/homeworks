import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Serjge',
    message: 'Hello Friends!',
    time: '22:00',
}
const messageDataAlternative1 = [
        {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Serjge',
            message: 'Hello Friend!',
            time: '22:00',
        }
         ]
const messageDataAlternative2 = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Serjge',
        message: 'Hello Friend!',
        time: '22:00',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Serjge',
        message: 'How are you?',
        time: '22:01',
    } ]
const messageDataAlternative3 = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Serjge',
        message: 'Hello Friend!',
        time: '22:00',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Serjge',
        message: 'Glad to see you!',
        time: '22:01',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Serjge',
        message: 'How are you?',
        time: '22:02',
    }
    ]


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>

            <AlternativeMessage messages={messageDataAlternative3} />
            {/*<hr/>*/}
            {/*<AlternativeMessage messages={messageDataAlternative2} />*/}
            {/*<hr/>*/}
            {/*<AlternativeMessage messages={messageDataAlternative1} />*/}
            {/*для личного творчества, могу проверить*/}

            {/*<hr/>*/}
        </div>
    )
}

export default HW1
