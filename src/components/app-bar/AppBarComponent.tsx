import React from "react";
import { connect } from "react-redux";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import { GithubIcon } from "./GithubIcon";
import { Preferences } from "../../misc/Preferences";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100vw"
    },
    githubButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface AppBarComponentProps {
}
const AppBarComponentBase: React.FC<AppBarComponentProps> = (props: AppBarComponentProps) => {
    
    const classes = useStyles();

    

    function openLink(linkType: string) {
      window.open(Preferences.links[linkType], "_blank");
    }

    return (
        <div className={classes.root}>
            <AppBar id="trs-app-bar" position="static">
                <Toolbar>
                  <IconButton 
                    onClick={() => openLink("github")}
                    edge="start" id="trs-app-bar-github-button" className={classes.githubButton} 
                    color="inherit" aria-label="menu">
                      <GithubIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => openLink("twitter")}
                    edge="start" id="trs-app-bar-twitter-button" className={classes.githubButton} color="inherit" aria-label="menu">
                      <TwitterIcon />
                  </IconButton>
                  <Typography variant="h6" id="trs-app-name" className={classes.title}>
                      Text Transformer
                  </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

function mapStateToProps() {
    return {
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
    }
}

const AppBarComponent = connect(mapStateToProps, mapDispatchToProps)(AppBarComponentBase);
export { AppBarComponent }