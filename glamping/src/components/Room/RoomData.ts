export interface IData {
    id: string;
    name: string;
    description: string;
    image: string;
    area: number;
    minimum: number;
    maximum: number;
}

export const datas: IData[] = [
    {
        id: "rooma",
        name: "Room A",
        description: "기준2인, 최대2인",
        image: require("../../resource/inside.jpg"),
        area: 11,
        minimum: 2,
        maximum: 2,
    },
    {
        id: "roomb",
        name: "Room B",
        description: "기준2인, 최대3인",
        image: require("../../resource/inside.jpg"),
        area: 11,
        minimum: 2,
        maximum: 3,
    },
    {
        id: "roomc",
        name: "Room C",
        description: "기준2인, 최대3인",
        image: require("../../resource/inside.jpg"),
        area: 11,
        minimum: 2,
        maximum: 3,
    },
    {
        id: "roomd",
        name: "Room D",
        description: "기준3인, 최대4인",
        image: require("../../resource/inside.jpg"),
        area: 16,
        minimum: 3,
        maximum: 4,
    },
    {
        id: "roomf",
        name: "Room F",
        description: "기준4인, 최대6인",
        image: require("../../resource/inside.jpg"),
        area: 28,
        minimum: 4,
        maximum: 6,
    },
];
