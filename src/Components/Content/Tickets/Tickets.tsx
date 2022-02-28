import * as React from "react";
import { Grid } from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {IStore, ITicket} from "../../../ts/interfaces";
import { withStyles } from '@mui/styles';

// const Item = styled('pre')(({theme}) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'left',
//     color: theme.palette.text.secondary,
//     height: 150,
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'left',
//     width: 'calc(100% - 20px)',
//     transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//     borderRadius: 4,
//     boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'
// }));


export default function Tickets() {

    const ref = React.useRef();

    const tickets = useSelector((store: IStore) => store.data.tickets);
    const [tiles, setTiles] = useState([]);

    const TileComponent = withStyles({
        tile: {
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: 4,
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'
        }
    })((props: any) => {
        let item = JSON.parse(props.children);
        console.log(item);
        return <div className={props.classes.tile}>
            <h5>{item.summary}</h5>
        </div>
    });

    useEffect(() => {
        if (tickets.length !== 0) {
            let arrSix: any = [];
            let arrLast: any = [];
            tickets.map((item: ITicket) => {
                item.status.id === "6"
                    ? arrSix.push(item)
                    : arrLast.push(item);
            });
            setTiles(arrSix); //arrLast
            // console.log('arrSix: ', arrSix);
        }
    }, [tickets])

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            {
                tiles.map((elem: any) => {
                    return <Grid
                        item
                        zeroMinWidth
                        key={elem.key}
                        component={'div'}
                        xs={12} sm={6} md={6} lg={4} xl={2}
                        sx={{
                            overflow: 'hidden',
                            paddingBottom: '8px',
                            background: '#FFF'
                        }}
                    >
                        <TileComponent ref={ref}>
                            {
                                JSON.stringify(elem, null, 4)
                            }
                        </TileComponent>
                    </Grid>
                })
            }
        </Grid>

    )
}
