import { Grid } from "@chakra-ui/react";
import { datas } from "./RoomData";
import Product from "./Product";

export default function RoomPreview() {
    return (
        <Grid mt="100px" templateColumns="repeat(3, 1fr)" gap="20px">
            {datas.map((data, index) => (
                <Product
                    key={index}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                />
            ))}
        </Grid>
    );
}
