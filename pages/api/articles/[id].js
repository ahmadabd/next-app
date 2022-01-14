import {articles} from '../../../data';

export default function handler(req, res) {
    const filterd = articles.filter(article => article.id == req.query.id);

    if (filterd.length > 0) {
        res.status(200).json(filterd[0])
    } else {
        res.status(400).json({error: "article not found"})
    }
}