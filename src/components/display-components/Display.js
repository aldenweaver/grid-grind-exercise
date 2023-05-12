import { Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function Display({ currentImg, nextImg, prevImg, randomImg }) {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        margin: "5px",
        height: "auto"
    };

    return ( 
         
        <div className="display" style={style}>
            
            <img src={currentImg} alt="display"/>

            <div className="buttons-nav">
                
                <Button variant="contained" onClick={prevImg}>
                    <NavigateBeforeIcon/>
                </Button>

                <Button variant="contained" onClick={randomImg}>
                    <ShuffleIcon/>
                </Button>

                <Button variant="contained" onClick={nextImg}>
                    <NavigateNextIcon/>
                </Button>
               
            </div>
        </div>
     );
}

export default Display;