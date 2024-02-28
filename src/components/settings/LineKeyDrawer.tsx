import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Close, ContentCopy } from "@mui/icons-material";
import React from "react";
import { useAppState } from "../../hooks/useAppState";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  lineStyleButton: {
    textTransform: "none",
    fontSize: theme.typography.body1.fontSize,
    background: theme.palette.background.default,

    "&:hover": {
      background: theme.palette.background.default,
    },
    margin: theme.spacing(0, 3, 2, 3),
    maxWidth: "100%",
  },
  dialogContent: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 0),
  },
  buttonText: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

export const LineKeyDrawer = () => {
  const {
    lineKeyDrawerOpen,
    setLineKeyDrawerOpen,
    lineFilterState,
    appTheme,
    mapStyle,
  } = useAppState();

  const classes = useStyles();

  const [snackbarMessage, setSnackbarMessage] = React.useState<string | null>(
    null
  );

  const handleClose = () => {
    setLineKeyDrawerOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        open={lineKeyDrawerOpen}
      >
        <DialogTitle>
          <Typography variant="h2">Key to Lines</Typography>
          <IconButton
            className={classes.closeButton}
            onClick={handleClose}
            size="large"
          >
            <Close />
          </IconButton>
        </DialogTitle>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarMessage != null}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage}
        autoHideDuration={2400}
      />
    </>
  );
};
