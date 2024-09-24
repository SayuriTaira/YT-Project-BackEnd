"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoutes = void 0;
const express_1 = require("express");
const VideosRepository_1 = require("../modules/videos/repositories/VideosRepository");
const login_1 = require("../middleware/login");
const videoRoutes = (0, express_1.Router)();
exports.videoRoutes = videoRoutes;
const videosRepository = new VideosRepository_1.VideosRepository();
videoRoutes.post('/create-video', login_1.login, (request, response) => {
    videosRepository.create(request, response);
});
videoRoutes.post('/get-videos', (request, response) => {
    videosRepository.getVideos(request, response);
});
videoRoutes.post('/search', (request, response) => {
    videosRepository.searchVideos(request, response);
});
