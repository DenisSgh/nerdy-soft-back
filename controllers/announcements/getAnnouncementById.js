const { NotFound } = require('http-errors')
const Announcement = require('../../model')

const getAnnouncementById = async (req, res) => {
  const { id } = req.params

  const announcement = await Announcement.findById(id)

  if (!announcement) {
    throw new NotFound('Not found')
  }

  res.status(200).json(announcement)
}

module.exports = getAnnouncementById
