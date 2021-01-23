import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.between(450, 960)]: {
      padding: "10px 25px",
    },
    [theme.breakpoints.down(360)]: {
      width: "100vw",
      padding: "10px 10px",
    },
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",

    [theme.breakpoints.between(567, 960)]: {
      fontSize: "40px",
    },
    [theme.breakpoints.between(0, 566)]: {
      fontSize: "30px",
    },
    [theme.breakpoints.between(0, 566)]: {
      fontSize: "25px",
      whiteSpace: "nowrap",
    },
  },
  image: {
    height: "60px",
    marginLeft: "15px",
    [theme.breakpoints.between(0, 960)]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.between(450, 960)]: {
      width: "300px",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.between(361, 567)]: {
      width: "80%",
    },
    [theme.breakpoints.down(360)]: {
      width: "100%",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(360)]: {
      fontSize: "16px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down(567)]: {
      display: "none",
    },
  },
}));
