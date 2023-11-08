import { connectDB } from "../../DB/models/connection.js"




export const initApp = (app, express) => {
    const port = process.env.PORT || 5000;
    connectDB();
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
      });
}