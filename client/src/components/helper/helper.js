import { read, utils, writeFile } from 'xlsx';

export const exportToExcel = async (downloadObject) => {
    const worksheet = utils.json_to_sheet(downloadObject);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    writeFile(workbook, 'data.xlsx');
}
export const uploadFromExcel = async (tableObject) => {
    try {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xlsx'; // Specify the accepted file type (Excel)
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = new Uint8Array(e.target.result);
                        const workbook = read(data, { type: 'array' });
                        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
                        const sheet = workbook.Sheets[sheetName];
                        const jsonData = utils.sheet_to_json(sheet);
                        //   dispatch(createQuestion(jsonData));
                        tableObject.push(jsonData);
                        console.log(jsonData, "yeh aya hai");
                        // setGridData(jsonData);
                    } catch (error) {
                        console.error('Error parsing Excel file:', error);
                    }
                };
                reader.readAsArrayBuffer(file);
            }
        });

        fileInput.click();
    } catch (error) {
        console.error('Error uploading question:', error);
    }
};