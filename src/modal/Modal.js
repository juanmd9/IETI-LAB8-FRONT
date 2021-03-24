import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const filter = {};
        for (let entry of formData.entries()) {
            filter[entry[0]] = entry[1];
        }
        console.log(filter);
    }

    return (
        <div>
            <Button variant="contained" color="secondary" className={classes.button} startIcon={<FilterListIcon />} onClick={handleOpen}> Filter </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography variant="h3" component="h1" align="center">
                            TASK FILTERS
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl margin="normal" fullWidth>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            name="dueDate"
                                            label="Due Date"
                                            type="date"
                                            id="dueDate"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl margin="normal" fullWidth>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="responsible"
                                            label="Responsible"
                                            name="responsible"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-status-native-simple">Status</InputLabel>
                                    <Select
                                        native
                                        label="Status"
                                        inputProps={{
                                            name: 'status',
                                            id: 'outlined-status-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={'Ready'}>Ready</option>
                                        <option value={'In Progress'}>In Progress</option>
                                        <option value={'Done'}>Done</option>
                                    </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Button variant="contained" color="secondary" className={classes.button} endIcon={<ClearIcon />} onClick={handleOpen}> CLEAR ALL </Button>
                            <Button variant="contained" color="primary" type="submit" className={classes.button} endIcon={<SearchIcon />} onSubmit={handleSubmit}> APPLY </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}