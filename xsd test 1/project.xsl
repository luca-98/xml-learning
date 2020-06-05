<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    #tasks {
                    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    }
                    
                    #tasks td, th {
                    border: 1px solid #ddd;
                    padding: 8px;
                    }
                    
                    #tasks tr:nth-child(even){
                    background-color: #f2f2f2;
                    }
                    
                    #tasks tr:hover {
                    background-color: #ddd;
                    }
                    
                    #tasks th {
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
                
                <table id = "tasks">
                    <tr>
                        <th>name</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>manager</th>
                       
                    </tr>
                    <xsl:for-each select="project">
                        <tr>
                            <td> 
                                <xsl:value-of select="name"/>
                            </td>
                           
                            <td> 
                                <xsl:value-of select="startDate"/>
                            </td>
                            <td> 
                                <xsl:value-of select="endDate"/>
                            </td>
                            <td> 
                                <xsl:value-of select="manager"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                
                <table id = "tasks">
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>person</th>
                        <th>startDate</th>
                        <th>endDate</th>
                    </tr>
                    <xsl:for-each select="project/tasks/task">
                        <tr>
                            <td> 
                                <xsl:value-of select="name"/>
                            </td>
                            <td> 
                                <xsl:value-of select="description"/>
                            </td>
                            <td> 
                                <xsl:value-of select="person"/>
                            </td>
                            <td> 
                                <xsl:value-of select="startDate"/>
                            </td>
                            <td> 
                                <xsl:value-of select="endDate"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>