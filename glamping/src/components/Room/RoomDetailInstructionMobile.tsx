import { Text, VStack } from "@chakra-ui/react";

interface iProps {
    area: number;
    minimum: number;
    maximum: number;
}

export default function RoomDetailInstructionMobile({
    area,
    minimum,
    maximum,
}: iProps) {
    return (
        <VStack align="flex-start" spacing="30px" mt="50px">
            <VStack align="flex-start">
                <Text fontWeight="bold" fontSize="20px">
                    구조넓이
                </Text>
                <Text>
                    {area}평(
                    {`${((area as number) * 3.3).toFixed(1)}㎡`})
                </Text>
            </VStack>

            <VStack alignItems="flex-start">
                <Text fontWeight="bold" fontSize="20px">
                    구비시설
                </Text>
                <Text>
                    TV, 침대, 에어컨, 난방기구, 냉장고, 취사도구, 전자레인지,
                    가스레인지, 무선인터넷, 일산화탄소 경보기, 소화기,
                    개별바베큐
                </Text>
            </VStack>

            <VStack alignItems="flex-start">
                <Text fontWeight="bold" fontSize="20px">
                    기준인원
                </Text>
                <Text>
                    기준 {minimum}명 ~ 최대 {maximum}명 / 최대인원 초과시 1명당
                    추가요금 발생
                </Text>
                <Text>성인: 20,000원 / 아동: 10,000원 / 유아: 0원</Text>
            </VStack>

            <VStack alignItems="flex-start">
                <Text fontWeight="bold" fontSize="20px">
                    특이사항
                </Text>
                <Text>반려동물 금지, 객실랜덤배정, 추가요금 전화문의 필수</Text>
            </VStack>
        </VStack>
    );
}
