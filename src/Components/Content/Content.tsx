import * as React from "react";
import {Box, Grid, Paper, styled} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {IStore, ITicket} from "../../ts/interfaces";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Content() {

    const tickets = useSelector((store: IStore) => store.data.tickets);
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        if (tickets.length !== 0) {
            let arrSix: any = [];
            let arrLast: any = [];
            tickets.map((item: ITicket) => {
                item.status.id === "6"
                    ? arrSix.push(item)
                    : arrLast.push(item);
            });
            setTiles(arrLast);
            console.log('arrSix: ', arrSix);
        }
    }, [tickets])

    return (
        <Box sx={{flexGrow: 1, padding: '14px'}}>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                {
                    tiles.map((elem) => {
                        return <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                            <Item>
                                {
                                    JSON.stringify(elem)
                                }
                            </Item>
                        </Grid>
                    })
                }
                {/*                    <Grid item xs={6} md={8}>*/}
                {/*                        <Item>*/}
                {/*                            {[...new Array(6)]*/}
                {/*                                .map(*/}
                {/*                                    () => `Cras mattis consectetur purus sit amet fermentum.*/}
                {/*Cras justo odio, dapibus ac facilisis in, egestas eget quam.*/}
                {/*Morbi leo risus, porta ac consectetur ac, vestibulum at eros.*/}
                {/*Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,*/}
                {/*                                )*/}
                {/*                                .join('\n')}*/}
                {/*                        </Item>*/}
                {/*                    </Grid>*/}
                {/*                    <Grid item xs={6} md={4}>*/}
                {/*                        <Item>xs=6 md=4</Item>*/}
                {/*                    </Grid>*/}
                {/*                    <Grid item xs={6} md={4}>*/}
                {/*                        <Item>xs=6 md=4</Item>*/}
                {/*                    </Grid>*/}
                {/*                    <Grid item xs={6} md={8}>*/}
                {/*                        <Item>*/}
                {/*                            {[...new Array(6)]*/}
                {/*                                .map(*/}
                {/*                                    () => `Cras mattis consectetur purus sit amet fermentum.*/}
                {/*Cras justo odio, dapibus ac facilisis in, egestas eget quam.*/}
                {/*Morbi leo risus, porta ac consectetur ac, vestibulum at eros.*/}
                {/*Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,*/}
                {/*                                )*/}
                {/*                                .join('\n')}*/}
                {/*                        </Item>*/}
                {/*                    </Grid>*/}
            </Grid>
        </Box>
    )
}
