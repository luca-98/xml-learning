<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
    <html>
      <head>
          <style>
              #daily-values {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
              }
              
              #daily-values td, th {
              border: 1px solid #ddd;
              padding: 8px;
              }
              
              #daily-values tr:nth-child(even){
              background-color: #f2f2f2;
              }
              
              #daily-values tr:hover {
              background-color: #ddd;
              }
              
              #daily-values th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 8px;
              }
              
              
              #food {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
              }
              
              #food td, th {
              border: 1px solid #ddd;
              padding: 8px;
              }
              
              #food tr:nth-child(even){
              background-color: #f2f2f2;
              }
              
              #food tr:hover {
              background-color: #ddd;
              }
              
              #food th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 8px;
              }
              
          </style>
      </head> 
        <body>
            <table id = "daily-values" border="1px">        
                <tr>
                    <th>total-fat</th>
                    <th>saturated-fat</th>
                    <th>cholesterol</th>
                    <th>sodium</th>
                    <th>carb</th>
                    <th>fiber</th>
                    <th>protein</th>
                </tr>
                <xsl:for-each select="nutrition/daily-values">
                    <tr>
                        <td>
                            <xsl:value-of select="total-fat"/>
                        </td>
                        <td>
                            <xsl:value-of select="saturated-fat"/>
                        </td>
                        <td>
                            <xsl:value-of select="cholesterol"/>
                        </td>
                        <td>
                            <xsl:value-of select="sodium"/>
                        </td>
                        <td>
                            <xsl:value-of select="carb"/>
                        </td>
                        <td>
                            <xsl:value-of select="fiber"/>
                        </td>
                        <td>
                            <xsl:value-of select="protein"/>
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
            <br></br>
            <table id="food" border="1px">
                <tr>
                    <th rowspan="2">name</th>
                    <th rowspan="2">mfr</th>
                    <th rowspan="2">serving</th>
                    <th rowspan="2">calories</th>
                    <th rowspan="2">total-fat</th>
                    <th rowspan="2">saturated-fat</th>
                    <th rowspan="2">cholesterol</th>
                    <th rowspan="2">sodium</th>
                    <th rowspan="2">carb</th>
                    <th rowspan="2">fiber</th>
                    <th rowspan="2">protein</th>
                    <th colspan="2">vitamins</th>
                    <th colspan="2">minerals</th>
                </tr>
                <tr>
                   
                    <th>a</th>
                    <th>c</th>
                    <th>ca</th>
                    <th>fe</th>
                </tr>
                <xsl:for-each select="nutrition/food">
                    <tr>
                        <td>
                            <xsl:value-of select="name"/>
                        </td>
                        <td>
                            <xsl:value-of select="mfr"/>
                        </td>
                        <td>
                            <xsl:value-of select="serving"/>
                        </td>
                        <td>
                            <xsl:value-of select="calories"/>
                        </td>
                        <td>
                            <xsl:value-of select="total-fat"/>
                        </td>
                        <td>
                            <xsl:value-of select="saturated-fat"/>
                        </td>
                        <td>
                            <xsl:value-of select="cholesterol"/>
                        </td>
                        <td>
                            <xsl:value-of select="sodium"/>
                        </td>
                        <td>
                            <xsl:value-of select="carb"/>
                        </td>
                        <td>
                            <xsl:value-of select="fiber"/>
                        </td>
                        <td>
                            <xsl:value-of select="protein"/>
                        </td>
                        <td>
                            
                            <xsl:value-of select="vitamins/a"/>
                            
                        </td>
                        <td>
                            
                            <xsl:value-of select="vitamins/c"/>
                            
                        </td>
                        <td>
                            
                            <xsl:value-of select="minerals/ca"/>
                            
                        </td>
                        <td>
                            
                            <xsl:value-of select="minerals/fe"/>
                            
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>