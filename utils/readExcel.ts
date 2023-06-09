import * as path from 'path';
import Excel from 'exceljs';

class readExcel {

    async getUsers() {
        const filePath = path.resolve(__dirname, '../testData/users.xlsx');

        type user = {
            userId: string;
            password: string;
        };
        const getCellValue = (row: Excel.Row, cellIndex: number) => {
            const cell = row.getCell(cellIndex);

            return cell.value ? cell.value.toString() : '';
        };
        const workbook = new Excel.Workbook();
        const content = await workbook.xlsx.readFile(filePath);
        const worksheet = content.worksheets[0];
        const rowStartIndex = 2;
        const numberOfRows = worksheet.rowCount - 1;
        const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];

        const users = rows.map((row): user => {
            return {
                // @ts-ignore
                userId: getCellValue(row, 1),
                // @ts-ignore
                password: getCellValue(row, 2),
                // @ts-ignore
            }
        });
        return users
    }
}

export default new readExcel()


