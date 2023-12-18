import { Text } from "@chakra-ui/react";

interface iProps {
    area: number;
    minimum: number;
    maximum: number;
}

export default function RoomDetailInstruction({
    area,
    minimum,
    maximum,
}: iProps) {
    return (
        <>
            <Text>
                구조넓이: {area}평(
                {`${((area as number) * 3.3).toFixed(1)}㎡`})
            </Text>
            <Text>
                구비시설: TV, 침대, 에어컨, 난방기구, 냉장고, 취사도구,
                전자레인지, 가스레인지, 무선인터넷, 일산화탄소 경보기, 소화기,
                개별바베큐
            </Text>
            <Text mt="20px">
                기준인원: 기준 {minimum}명 ~ 최대 {maximum}명 / 최대인원 초과시
                1명당 추가요금 발생
            </Text>
            <Text>성인: 20,000원 / 아동: 10,000원 / 유아: 0원</Text>
            <Text mt="20px">
                특이사항: 객실랜덤배정, 추가요금 전화문의 필수
            </Text>
        </>
    );
}
