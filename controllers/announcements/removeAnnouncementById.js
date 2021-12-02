const { NotFound } = require('http-errors')
const Announcement = require('../../model')

const removeAnnouncementById = async (req, res) => {
  const { id } = req.params
  const announcement = await Announcement.findByIdAndRemove(id)

  if (!announcement) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Announcement deleted',
  })
}

module.exports = removeAnnouncementById
