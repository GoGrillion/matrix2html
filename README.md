# matrix2html 

Pretty print matrices in various HTML formats  

### Features
 
- Tables

## Usage

.toTable( data: array )


<a name="toTable" href="#toTable">#</a> matrix2html.<b>toTable</b>(<i>data</i>[, <i>rowLength</i>])

Compile an HTML table from array values in *data*. If *rowLength* is provided, one dimensional arrays will wrap at *rowLength* items. This is meant to be useful for situations like WebGL where matrices which are commonly stored as a Float32Array of 16 elements. 

## Examples

### Generate a table for a mat4 WebGL Matrix

```javascript 1.6
    let matrix = mat4.identity();
    console.log( matrix2html.toTable(matrix, 4) ); // wrap rows at 4 elements
```
Console's output will be

```html
<table>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
</table>
```

-- or visually --

|   |   |   |   |
|---|---|---|---|
| 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 1 |
        
## License

Copyright (C) 2018 GoGrillion

gl-graph is licensed under the ISC License