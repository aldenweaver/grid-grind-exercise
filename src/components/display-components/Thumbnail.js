import { Card, CardActionArea, CardMedia } from "@mui/material";

import { thumbnailCardStyle } from '../../styles/displayStyles';

function Thumbnail({ path, setCurrentImg }) {
    return ( 
        <Card sx={thumbnailCardStyle}>
            <CardActionArea onClick={() => setCurrentImg(path)}>
                <CardMedia component="img" image={path}/>
            </CardActionArea>
        </Card>
    );
}

export default Thumbnail;