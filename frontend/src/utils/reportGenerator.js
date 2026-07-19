import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateEmergencyReport(data) {

    const doc = new jsPDF();

    /* ===============================
       Header
    =============================== */

    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 32, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("PATHX", 105, 15, { align: "center" });

    doc.setFontSize(11);
    doc.text(
        "Smart Emergency Route Optimization System",
        105,
        24,
        { align: "center" }
    );

    /* ===============================
       Report Title
    =============================== */

    doc.setTextColor(30, 41, 59);

    doc.setFontSize(20);
    doc.text("Emergency Dispatch Report", 14, 45);

    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.8);
    doc.line(14, 49, 195, 49);

    /* ===============================
       Dispatch Information
    =============================== */

    autoTable(doc, {

        startY: 56,

        theme: "grid",

        headStyles: {

            fillColor: [37, 99, 235],

            textColor: 255,

            halign: "center",

            fontStyle: "bold"

        },

        styles: {

            fontSize: 10,

            cellPadding: 3

        },

        head: [

            ["Dispatch Information", "Details"]

        ],

        body: [

            ["Incident ID", data.incidentId],

            ["Priority Level", "HIGH"],

            ["Emergency Type", data.emergencyType || "Ambulance"],

            ["Generated On", new Date().toLocaleString()],

            ["System Status", "Healthy"]

        ]

    });

    /* ===============================
       Route Information
    =============================== */

    autoTable(doc, {

        startY: doc.lastAutoTable.finalY + 10,

        theme: "striped",

        headStyles: {

            fillColor: [22, 163, 74],

            textColor: 255

        },

        head: [

            ["Route Information", "Value"]

        ],

        body: [

            ["Source", data.source],

            ["Destination", data.destination],

            ["Optimization Goal", data.optimization || "Fastest"],

            ["Algorithm Used", data.algorithm],

            ["Distance", `${data.distance} km`],

            ["Estimated Time", `${data.estimatedTime} min`],

            ["Visited Nodes", data.visitedNodes],

            ["Traffic Status", "Moderate"]

        ]

    });

    /* ===============================
       Performance Summary
    =============================== */

    autoTable(doc, {

        startY: doc.lastAutoTable.finalY + 10,

        theme: "grid",

        headStyles: {

            fillColor: [234, 88, 12],

            textColor: 255

        },

        head: [

            ["Performance Metric", "Status"]

        ],

        body: [

            ["Route Optimization", "Completed Successfully"],

            ["Navigation Engine", "Operational"],

            ["Emergency Response", "Ready"],

            ["Traffic Intelligence", "Active"],

            ["Prediction Engine", "Available"]

        ]

    });

    /* ===============================
       Footer
    =============================== */

    const pageHeight = doc.internal.pageSize.height;

    doc.setDrawColor(200);
    doc.line(14, pageHeight - 28, 196, pageHeight - 28);

    doc.setFontSize(11);
    doc.setTextColor(37, 99, 235);

    doc.text(
        "PATHX Emergency Intelligence Platform",
        105,
        pageHeight - 18,
        { align: "center" }
    );

    doc.setFontSize(9);
    doc.setTextColor(120);

    doc.text(
        "Generated automatically by PATHX Smart Route Optimization System",
        105,
        pageHeight - 11,
        { align: "center" }
    );

    doc.save(`${data.incidentId}.pdf`);

}