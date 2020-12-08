import { FunctionComponent } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

type TitleProps = {
    size?: number,
    color?: string,
    mb?: number,
}

const Title: FunctionComponent<TitleProps> = (props) => {
    
    /**
     * Get default font size depending of the type of title (h1, h2, h3 etc)
     * @param size 
     */
    const getFontSize = (size : number) : string => {
        const theme = useTheme();
        const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));
        const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));

        if(size === 1){

            if(isSmallScreen === true) return "2.8rem";

            if(isMediumScreen === true) return "3rem";

            return "3.5rem"; 
        }
    
        if(size === 2){
            return "1.8rem";
        }
    
        return "1.5rem";
    }

    const { size, ...otherProps } =  props;
    let title = {
        fontWeight: 100,
        lineHeight: 1.125,
        fontSize: getFontSize(props.size)
    };

    const useStyles = makeStyles({title});
    const classes = useStyles();

    return <Box component={`h${size}`} {...otherProps}  className={classes.title}  >{props.children}</Box>
}

export default Title;