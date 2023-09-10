import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    user: { type: String },
    report: { type: String }
});

const reportModel = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default reportModel;