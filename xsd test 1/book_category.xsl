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
                   
                </style>
                <title>Book Category</title>
                <body>
                    <table id='books' border="1px">
                       
                        <tr>
                            <th>title</th>
                            <th>price</th>
                            <th>comments</th>
                        </tr>
                        
                        <xsl:for-each select="bookstore/book">
                            <tr>
                                <td>
                                    <xsl:value-of select="title"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                                <td> 
                                    <xsl:for-each select="comments/userComment">
                                        <xsl:value-of select="."/> <br/>
                                    </xsl:for-each>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </body>
            </head>
        </html>
    </xsl:template>
</xsl:stylesheet>