const GET_ALL_MOVIES = (req, res) => {
    return res.json({ response: movies })
}

module.exports = { GET_ALL_MOVIES }