import report from "../../../lib/models/report";

const handler = async (req, res) => {
    if (req.method == "POST") {
        const reportData = new report({
            user: req.body.user,
            report: req.body.data
        });
        reportData.save()
            .then((savedReport) => {
                const savedReportId = savedReport._id;
                res.json({ success: true, id: savedReportId });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    if (req.method == "GET") {
        const data = await report.find({});
        if (data) {
            res.json(data);
        }
        else {
            res.json("No reports");
        }
    }
};

export default handler;