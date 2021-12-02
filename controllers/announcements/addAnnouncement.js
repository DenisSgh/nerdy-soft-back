const Announcement = require('../../model')

const addAnnouncement = async (req, res) => {
  const body = req.body

  console.log(body)
  const announcement = await Announcement.create(body)

  res.status(201).json({
    message: 'Announcement created',
    announcement,
  })
}

module.exports = addAnnouncement
