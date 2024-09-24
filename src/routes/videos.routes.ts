import { Router } from 'express';
import { VideosRepository } from '../modules/videos/repositories/VideosRepository';
import { login } from '../middleware/login'

const videoRoutes = Router();
const videosRepository = new VideosRepository()

videoRoutes.post('/create-video', login, (request, response) => {
    videosRepository.create(request, response)
})

videoRoutes.post('/get-videos', (request, response) => {
    videosRepository.getVideos(request, response)
})

videoRoutes.post('/search', (request, response) => {
    videosRepository.searchVideos(request, response)
})

export { videoRoutes }