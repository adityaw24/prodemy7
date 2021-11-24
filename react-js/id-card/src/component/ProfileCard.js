import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ProfileCard.css';
import foto from '../img/profile.jpeg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Card (props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className="container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <Item>
                                    <div className="row align-items-center">
                                        <div className="col-4"><img src={foto} className="img-fluid rounded-3"></img></div>
                                        <div className="col">
                                            <div className="mb-4">
                                                <h2 className="fw-bold mb-4">{props.nama}</h2>
                                                <p className="mb-4">{props.id}</p>
                                                <h5 className="mb-4">{props.job}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </React.Fragment>
    );
}

// ReactDOM.render(<ProfileCard />, document.querySelector('#root'));
export default Card;