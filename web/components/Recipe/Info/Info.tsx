import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent } from 'react';

type InfoProps = {
    title: string,
    content: string,
    mr?: number
}

const Info :FunctionComponent<InfoProps> = (props) => {
    let { title, content, ...otherProps } = props;

    let styles = {
        title: {
            fontSize: "14px",
            color: "white",
        },
        content: {
            fontWeight: 500,
            color: "white",
        }
    }

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const contentCapitalized = content.charAt(0).toUpperCase() + content.slice(1)

    return(
        <Box display="flex" flexDirection="column" {...otherProps} >
            <span className={classes.title} >{title}</span>
            <span className={classes.content} >{contentCapitalized}</span>
        </Box>
    )

}

export default Info;