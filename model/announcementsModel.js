const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const announcementSchema = Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for announcement'],
    },
    description: {
      type: String,
      required: [true, 'Set description for announcement'],
    },
    date: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
)

announcementSchema.plugin(mongoosePaginate)

const Announcement = model('announcement', announcementSchema)

module.exports = Announcement
