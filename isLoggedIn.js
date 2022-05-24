import 'dotenv/config';
import jwt from 'jsonwebtoken'

const isLoggedIn = async (req, res) => {
    const token = req.cookies.token;
    if (token) {
        const bool = jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if (err) return false
            req.token = result
            return true
        })
        return bool
    } else {
        return false
    }
}
export default isLoggedIn
