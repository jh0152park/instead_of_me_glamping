import { VStack } from "@chakra-ui/react";
import { IRoom } from "./RoomData";
import RoomDetailImage from "./RoomDetailImage";
import RoomDetailInstruction from "./RoomDetailInstruction";
import RoomDetailImageMobile from "./RoomDetailImageMobile";
import RoomDetailInstructionMobile from "./RoomDetailInstructionMobile";

export default function RoomDetailInformationMobile({ room }: IRoom) {
    return (
        <VStack alignItems="flex-start">
            <RoomDetailImageMobile roomInsde={room?.image as string} />
            <RoomDetailInstructionMobile
                area={room?.area as number}
                maximum={room?.maximum as number}
                minimum={room?.minimum as number}
            />
        </VStack>
    );
}
