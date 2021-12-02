const express = require('express')

const router = express.Router()
const {
  getAllAnnouncements,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncementById,
  removeAnnouncementById,
} = require('../../controllers/announcements')
const controllerWrapper = require('../../middlewares')
const announcementValidation = require('../../middlewares/validation')

router.get('/', controllerWrapper(getAllAnnouncements))

router.get('/:id', controllerWrapper(getAnnouncementById))

router.post('/', announcementValidation(), controllerWrapper(addAnnouncement))

router.put('/:id', controllerWrapper(updateAnnouncementById))

router.delete('/:id', controllerWrapper(removeAnnouncementById))

module.exports = router
