const { Schema, model } = require("mongoose");

const showSchema = new Schema(
    {
        name: { type: String, required: true },
        movies_ids: [
            {
                type: Schema.Types.ObjectId,
                ref: "movie",
                require: true
            }
        ],
        total_seat: { type: Number, required: true },
        screen_ids: [{ type: Schema.Types.ObjectId, ref: "screen", require: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = model("show", showSchema);
