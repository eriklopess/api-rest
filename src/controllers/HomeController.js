class HomeController {
    index(req, res) {
        res.status(200).json({
            allRight: true
        })
    }
}

module.exports = new HomeController();
