"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosRepository = void 0;
const mysql_1 = require("../../../mysql");
const uuid_1 = require("uuid");
class VideosRepository {
    create(request, response) {
        const { user_id, title, description } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('INSERT INTO videos (video_id, user_id, title, description) VALUES (?,?,?,?)', [(0, uuid_1.v4)(), user_id, title, description], (error, result, fields) => {
                connection.release();
                if (error) {
                    return response.status(400).json(error);
                }
                response.status(200).json({ message: 'Vídeo criado com sucesso' });
            });
        });
    }
    getVideos(request, response) {
        const { user_id } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE user_id = ?', [user_id], (error, results, fields) => {
                connection.release();
                if (error) {
                    return response.status(400).json({ error: "Erro ao buscar os vídeos!" });
                }
                return response.status(200).json({ message: 'Vídeos retornados com sucesso', videos: results });
            });
        });
    }
    searchVideos(request, response) {
        const { search } = request.query;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE title LIKE ?', [`%${search}%`], (error, results, fields) => {
                connection.release();
                if (error) {
                    return response.status(400).json(error);
                }
                return response.status(200).json({ message: 'Vídeos retornados com sucesso', videos: results });
            });
        });
    }
}
exports.VideosRepository = VideosRepository;
