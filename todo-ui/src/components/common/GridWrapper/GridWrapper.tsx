import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './styles';

interface GridWrapperProps{
    children: any;
}

const GridWrapper = ({ children } : GridWrapperProps) => {

    return (
        <Grid item xs={12} sx={gridWrapperStyles}>
            {children}
        </Grid>
    )
}

export default GridWrapper
