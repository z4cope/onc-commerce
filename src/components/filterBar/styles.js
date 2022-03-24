import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  filterBar: {
    width: "100%",
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    marginTop: "5rem",
  },
  filterItemsWrapper: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  item: {
    cursor: "pointer",
    color: "#000",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
}));
