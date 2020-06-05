<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    #employee {
                        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                        border-collapse: collapse;
                        width: 100%;
                    }

                    #employee td, #customers th {
                        border: 1px solid #ddd;
                        padding: 8px;
                    }

                    #employee tr:nth-child(even){
                        background-color: #f2f2f2;
                    }

                    #employee tr:hover {
                        background-color: #ddd;
                    }

                    #employee th {
                        padding-top: 12px;
                        padding-bottom: 12px;
                        text-align: center;
                        background-color: #4CAF50;
                        color: white;
                        padding: 8px;
                    }
                </style>
                <title>Employees</title>
                <body>
                    <table id="employee" border="1px">
                        <tr>
                            <th colspan="2">Department</th>
                            <th rowspan="2">Name</th>
                            <th rowspan="2">Gender</th>
                            <th rowspan="2">Phone</th>
                            <th rowspan="2">Email</th>
                            <th rowspan="2">Address</th>
                        </tr>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                        </tr>
                        <xsl:for-each select="employees/employee">
                            <tr>
                                <td>
                                    <xsl:value-of select="department/code"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="department/name"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="name"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="gender"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="phone"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="email"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="address"></xsl:value-of>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </body>
            </head>
        </html>
    </xsl:template>
</xsl:stylesheet>
