function isArray(a){
  return Array.isArray(a) || ArrayBuffer.isView(a);
}

module.exports = {

  toTable: (data, rowLength, formatCb ) => {
    let tableHtml = '<table>\n';

    // Check for normal arrays
    // console.log('Array.isArray(data)', Array.isArray(data));

    // Check for ArrayBuffer arrays
    // console.log('isView', ArrayBuffer.isView(data));

    if( isArray(data) && rowLength ){
      data.forEach((item, index) => {

        //Start row?
        if( index % rowLength === 0 ){
          tableHtml += '  <tr>\n';
        }

        tableHtml += '    <td>' + (formatCb ? formatCb(item) : item) + '</td>\n';

        //End Row?
        if( index % rowLength === rowLength - 1 ){
          tableHtml += '  </tr>\n';
        }

      });
    }

    tableHtml += '</table>';
    return tableHtml;
  }
};