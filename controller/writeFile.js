export default async (workBook, reply) => {
    console.log('something')
    var fileName = 'FileName.xlsx';
    reply.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    reply.header("Content-Disposition", "attachment; filename=" + fileName);
    await workBook.xlsx.write(reply)
    reply.res()
}