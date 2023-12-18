import { Grid } from "@chakra-ui/react";
import { datas } from "./RoomData";
import Product from "./Product";
import ProductMobile from "./ProductMobile";

export default function RoomPreviewMobile() {
    return (
        <Grid mt="100px" templateColumns="repeat(1, 1fr)" gap="20px">
            {datas.map((data, index) => (
                <ProductMobile
                    key={index}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                />
            ))}
        </Grid>
    );
}
