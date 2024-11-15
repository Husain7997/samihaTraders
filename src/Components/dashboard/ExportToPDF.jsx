import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportToPDF = (salesData) => {
  const doc = new jsPDF();

  doc.text("Sales Data", 14, 10);
  doc.autoTable({
    startY: 20,
    head: [["Date", "Reference", "Customer", "Warehouse", "Status", "Grand Total", "Paid", "Due", "Payment Status"]],
    body: salesData.map(sale => [
      sale.date,
      sale.reference,
      sale.customer,
      sale.warehouse,
      sale.status,
      `$${sale.grandTotal.toFixed(2)}`,
      `$${sale.paid.toFixed(2)}`,
      `$${sale.due.toFixed(2)}`,
      sale.paymentStatus,
    ]),
  });

  doc.save("SalesData.pdf");
};
export default ExportToPDF;