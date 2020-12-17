import ExcelJS from 'exceljs';

const excel = require("exceljs");

const download = async (req, reply) => {
    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");

    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "Title", key: "title", width: 25 },
      { header: "Description", key: "description", width: 25 },
      { header: "Published", key: "published", width: 10 },
    ];

    // Add Array Rows
    worksheet.addRows(tutorials);

    reply.header(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    reply.header(
      "Content-Disposition",
      "attachment; filename=" + "tutorials.xlsx"
    );

      const result = await workbook.xlsx.write(reply).then(function () {
      reply.status(200).send(result);
    });
};

export default download;