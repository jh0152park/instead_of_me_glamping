import { useParams } from "react-router-dom";

export default function RoomDetail() {
    const room = useParams().roomName;

    console.log(room);

    return <h1>ROOM DETAIL {room}</h1>;
}
