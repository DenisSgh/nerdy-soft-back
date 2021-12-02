const getAllAnnouncements = require('./getAllAnnouncements')
const getAnnouncementById = require('./getAnnouncementById')
const addAnnouncement = require('./addAnnouncement')
const updateAnnouncementById = require('./updateAnnouncementById')
const removeAnnouncementById = require('./removeAnnouncementById')

module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncementById,
  removeAnnouncementById,
}
