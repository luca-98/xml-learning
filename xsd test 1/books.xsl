<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    #books {
                    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    }
                    
                    #books td, th {
                    border: 1px solid #ddd;
                    padding: 8px;
                    }
                    
                    #books tr:nth-child(even){
                    background-color: #f2f2f2;
                    }
                    
                    #books tr:hover {
                    background-color: #ddd;
                    }
                    
                    #books th {
                    padding-top: 12px;
                    padding-bottom: 12px;
                    text-align: center;
                    background-color: #4CAF50;
                    color: white;
                    padding: 8px;
                    }
                </style>
                <title>Books</title>
               
            </head>
            <body>
                <table id='books' border="1px">
                    <tr>
                        <th rowspan="2">title</th>
                        <th colspan="2">author</th>
                        <th rowspan="2">genre</th>
                    </tr>
                  
                    <tr>
                        
                        <th>First-name</th>
                        <th>last-name</th>
                    </tr>
                    <xsl:for-each select="bookstore/book">
                        <tr>
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="author/first-name"/>
                            </td>
                            <td>
                                <xsl:value-of select="author/last-name"/>
                            </td>
                            <td>
                                <xsl:value-of select="genre"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                    
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>