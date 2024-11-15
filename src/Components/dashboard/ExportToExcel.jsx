import * as XLSX from "xlsx";

const ExportToExcel = (salesData) => {
  const worksheet = XLSX.utils.json_to_sheet(salesData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Data");

  // Download the Excel file
  XLSX.writeFile(workbook, "SalesData.xlsx");
};
export default ExportToExcel;