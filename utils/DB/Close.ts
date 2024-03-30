import connection from "./Connection";
// close any open connections
const Close = () => {
  connection.end((err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Close the database connection.");
  });
};

export default Close;
