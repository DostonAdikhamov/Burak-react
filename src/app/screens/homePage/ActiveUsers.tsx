import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy";
import AspectRatio from "@mui/joy";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SproductCTOR **/
const topUserRetriever = createSelector(retrieveTopUsers, (topUsers)=> ({ topUsers })
);  

export default function ActiveUsers() {
    const { topUsers } = useSelector(topUserRetriever)
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {topUsers.length !== 0 ? (
                                topUsers.map((member: Member) => {
                                    const imagePath = `${serverApi}/${member.memberImage}`;
                                    return (
                                        <Card key={member._id} className="card">
                                            <Box className="user-image">
                                                <img src={imagePath} alt={member.memberNick} />
                                            </Box>
                                            <Typography className="member-nickname">
                                                {member.memberNick}
                                            </Typography>
                                        </Card>
                                    )
                                })

                            ) : ( 
                                <Box className="no-data">No avtive Users!</Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}