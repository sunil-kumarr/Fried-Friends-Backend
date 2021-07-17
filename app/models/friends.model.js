module.exports = mongoose => {
    const schema =
        mongoose.Schema({
            name: String,
            bio: String,
            date_of_birth: String,
            user_id: String,
        }, { timestamps: true });
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Friend = mongoose.model("friend", schema);
    return Friend;
};