const { NotFound } = require('http-errors')
const Announcement = require('../../model')

const updateAnnouncementById = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const announcement = await Announcement.findByIdAndUpdate(id, body, {
    new: true,
  })

  if (!announcement) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Announcement updated',
    announcement,
  })
}

module.exports = updateAnnouncementById
