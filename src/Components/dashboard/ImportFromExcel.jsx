import { useState } from "react";
import * as XLSX from "xlsx";

const ImportFromExcel = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const [sales, setSales]= useState(null)
  
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
  
      setSales(data); // Update sales data with imported data
    };
  
    reader.readAsBinaryString(file);
  };
  export default ImportFromExcel;