import {
    Box,
    CardContent,
    Card,
    Typography,
    ThemeProvider,
    createTheme,
    CardMedia,
    styled,
} from "@mui/material";
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";
import React from "react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const CardContentNoPadding = styled(CardContent)(`
    padding: 0;
    &:last-child {
      padding-bottom: 5px;
    }
  `);

const CarouselItemTeam = ({ phot, name, price }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    paddingTop: "10px",
                    background: "#00000",
                    borderRadius: "10px !important",
                    // on hover make the cursor pointer
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}

            >
                <Card
                    sx={{
                        background: "#F2DEBA",
                        borderRadius: "10px !important",
                        padding: "0px",
                        maxWidth: "300px !important",
                        minWidth: "300px !important",
                        maxHeight: "450px !important",
                    }}



                >
                    <CardMedia
                        component="img"
                        image={phot}
                        //   width="250"
                        alt={name}
                        sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            objectFit: "contain",
                            maxWidth: "250px !important",
                            minWidth: "250px !important",
                            margin: "auto",
                        }}
                    />
                    <CardContentNoPadding
                        sx={{
                            padding: "0px",
                            // paddingLeft: "8px",
                            // paddingRight: "14px",
                            paddingBottom: "0px",
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h6"
                            sx={{

                                fontWeight: "900px",
                                paddingLeft: "10px",
                                color: "#393E46",
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="black"
                            sx={{ padding: "0px", paddingLeft: "10px" }}
                        >
                            {price}
                        </Typography>

                    </CardContentNoPadding>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default CarouselItemTeam;