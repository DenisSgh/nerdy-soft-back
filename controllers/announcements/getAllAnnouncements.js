const Announcement = require('../../model')

const getAllAnnouncements = async (req, res) => {
  const { page = 1, limit = 5 } = req.query
  const announcements = await Announcement.paginate(Announcement.find(), {
    page,
    limit,
  })

  res.status(200).json({
    message: 'All announcements in list',
    announcements,
  })
}

module.exports = getAllAnnouncements
