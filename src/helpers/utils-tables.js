import Papa from 'papaparse';

export function csvExportV01(data, fileName, csvHeaders) {
    const csv = Papa.unparse({
        fields: csvHeaders.map(col => col.label),
        data: data.map(item => csvHeaders.map(col => item[col.key]))
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

