<?xml version="1.0" encoding="UTF-8"?>

<demo:stylesheet version="1.0" 
    xmlns:demo="http://www.w3.org/1999/XSL/Transform">
    <demo:template match="/">
        <html>
            <head>
                <title>demo xsl</title>
            </head>
            <body>
                <demo:for-each select="productlist/product">
                <demo:sort select="price" order="descending"/>
                    <div style="display:block;border:1px solid red">
                        <h2>
                            <demo:value-of select="name"/>
                        </h2>
                        <h3>
                            <i>
                                <demo:value-of select="price"/>
                            </i>
                        </h3>
                        <p>
                            <demo:value-of select="date"/>
                        </p>
                        <p>
                            <demo:value-of select="manufacturer"/>
                        </p>
                        <p>
                            <demo:value-of select="country"/>
                        </p>
                    </div>
                </demo:for-each>
            </body>
        </html>
    </demo:template>
</demo:stylesheet >