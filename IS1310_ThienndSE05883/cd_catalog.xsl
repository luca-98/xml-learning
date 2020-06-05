<?xml version="1.0" encoding="UTF-8"?>

<demo:stylesheet version="1.0" 
    xmlns:demo="http://www.w3.org/1999/XSL/Transform">
    <demo:template match="/">
        <html>
            <head>
                <title>cd catalog</title>
                <style>
                .body{
                    display:flex;
                    flex-wrap:wrap;
    justify-content: center;
                   
                }
                .element{
                width:300px;
                margin:10px;
                border-radius:5px;
                border:1px solid black;
                }

                .name{
                     font-size: 20px;
    font-weight: bolder;
    border-bottom: 1px solid;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #009688;
    color: white;
                }
                .artist,.country,.company,.price,.year{
                    padding :5px 10px;
                }
                </style>

            </head>
            <body class="body">
                <demo:for-each select="CATALOG/CD">
                    <div class="element">
                        <div class="name">
                            <demo:value-of select="TITLE"/>
                        </div>
                        <div class="artist">
                        ARTIST : <demo:value-of select="ARTIST"/>
                        </div>
                        <div class="country">
                        COUNTRY : <demo:value-of select="COUNTRY"/>
                        </div>
                        <div class="company">
                        COMPANY : <demo:value-of select="COMPANY"/>
                        </div>
                        <div class="price">
                        PRICE : <demo:value-of select="PRICE"/>
                        </div>
                        <div class="year">
                        YEAR : <demo:value-of select="YEAR"/>
                        </div>
                    </div>
                </demo:for-each>
            </body>
        </html>
    </demo:template>
</demo:stylesheet >