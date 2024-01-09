/* 
In express.js app a "controller" refers to a part of your code that is responsibel for handeling the app's logic. Controllers are typically used to preocess incoming requests, interact with models(date sources), and send response bakc to clients. They help organize your app by separating concerns following the mVC (model-view-controller) design pattern. 
*/
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("<h2>Welcome to world best mern series</h2>")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        (req, res) => {
            res.status(200).send("<h2>Welcome to the REgistration using auth controllers again</h2>")
        }
    } catch (error) {
        res.status(404).send('page not found')
    }
}


module.exports = { home, register };