import {
    Box,
    Divider,
    HStack,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    VStack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";

export default function UserGuide() {
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="고객 이용 사항" subtitle="이용안내" />

            <VStack
                w="100%"
                my="150px"
                minH="100vh"
                px={`${SCREEN_WIDTH * 0.1}px`}
                alignItems="flex-start"
            >
                <Box w="100%">
                    <Heading>유의사항</Heading>
                    <Divider />
                    <Divider />
                    <Divider />

                    <VStack alignItems="flex-start" mt="50px" spacing="30px">
                        <HStack spacing={1}>
                            <Text>보호자 동반없는</Text>
                            <Text color="orange" fontWeight="bold">
                                미성년자는 예약 및 입실 불가합니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>예약시 신청하신</Text>
                            <Text color="orange" fontWeight="bold">
                                인원이외에 추가인원은 입실이 거부될 수 있습니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>예약인원 초과로 인한 입실 거부시</Text>
                            <Text color="orange" fontWeight="bold">
                                환불도 진행되지 않으니 유의하시기 바랍니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>예약후 펜션이나 객실 변경은</Text>
                            <Text color="orange" fontWeight="bold">
                                해당예약 취소 후 다시 예약하셔야 합니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>예약변경을 위한 취소시에도</Text>
                            <Text color="orange" fontWeight="bold">
                                취소 수수료가 부과되오니 신중하게 예약하시기
                                바랍니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>최대 인원이 2인인 커플전용 객실의 경우</Text>
                            <Text color="orange" fontWeight="bold">
                                유아 및 아동 또는 반려동물의 입실이
                                불가능합니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text color="orange" fontWeight="bold">
                                전객실 반려동물 입장 불가능 합니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text color="orange" fontWeight="bold">
                                퇴실시 기본적인 정리정돈 및 배치된 물품을
                                절도하시면 안됩니다.
                            </Text>
                        </HStack>
                    </VStack>
                </Box>

                <Box w="100%" mt="100px">
                    <Heading>취소안내</Heading>
                    <Divider />
                    <Divider />
                    <Divider />

                    <VStack alignItems="flex-start" mt="50px" spacing="30px">
                        <HStack spacing={1}>
                            <Text>취소수수료는 예약시점과는 무관하며</Text>
                            <Text color="orange" fontWeight="bold">
                                이용시작일을 기준으로 합니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>환불시</Text>
                            <Text color="orange" fontWeight="bold">
                                결제하신 금액에서 취소수수료를 제외한 금액을
                                환불해 드립니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>취소수수료는 결제금액이 아닌</Text>
                            <Text color="orange" fontWeight="bold">
                                예약금(객실요금 + 옵션요금) 기준으로 책정됩니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text color="orange" fontWeight="bold">
                                취소수수료가 100%인 경우 전액 환불되지 않습니다.
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text>수수료 정책은 아래와 같습니다.</Text>
                        </HStack>

                        <TableContainer>
                            <Table
                                variant="striped"
                                colorScheme="orange"
                                size="lg"
                                // border="1px solid black"
                            >
                                <TableCaption>취소 수수료 정책표</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>기준</Th>
                                        <Th>취소수수료(%)</Th>
                                        <Th>환불액(%)</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>이용일 당일 취소시</Td>
                                        <Td>90%</Td>
                                        <Td>10% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 1일 전 취소시</Td>
                                        <Td>80%</Td>
                                        <Td>20% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 2일 전 취소시</Td>
                                        <Td>70%</Td>
                                        <Td>30% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 3일 전 취소시</Td>
                                        <Td>60%</Td>
                                        <Td>40% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 4일 전 취소시</Td>
                                        <Td>50%</Td>
                                        <Td>50% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 5일 전 취소시</Td>
                                        <Td>40%</Td>
                                        <Td>60% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 6일 전 취소시</Td>
                                        <Td>30%</Td>
                                        <Td>70% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 7일 전 취소시</Td>
                                        <Td>20%</Td>
                                        <Td>80% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이용일 8일 전 취소시</Td>
                                        <Td>0%</Td>
                                        <Td>100% 환불</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>기본 취소 수수료</Td>
                                        <Td>0%</Td>
                                        <Td>100% 환불</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>
                </Box>
            </VStack>
        </>
    );
}
