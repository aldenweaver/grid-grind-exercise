import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import { buttonStyle, currentCardStyle } from '../../styles/displayStyles';

function Display({ currentImg, nextImg, prevImg, randomImg }) {
    return ( 
        <Card sx={currentCardStyle}>
            <CardContent>
                <CardMedia component="img" image={currentImg} />
            </CardContent>
            
            <CardActions>
                <Button variant="contained" onClick={prevImg} sx={buttonStyle}>
                    <NavigateBeforeIcon/>
                </Button>

                <Button variant="contained" onClick={randomImg} sx={buttonStyle}>
                    <ShuffleIcon/>
                </Button>

                <Button variant="contained" onClick={nextImg} sx={buttonStyle}>
                    <NavigateNextIcon/>
                </Button>
            </CardActions>
        </Card> 
     );
}

export default Display;