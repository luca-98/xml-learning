/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import Product.Image;
import Product.Product;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.stream.XMLEventFactory;
import javax.xml.stream.XMLEventWriter;
import javax.xml.stream.XMLOutputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

/**
 *
 * @author ThienNDSE05883
 */
public class IOModel {

    public static List<Product> SaxRead() {
        SaxHandler saxHandler = null;
        try {
            File inputFile = new File("product.xml");
            SAXParserFactory factory = SAXParserFactory.newInstance();
            SAXParser saxParser = factory.newSAXParser();
            saxHandler = new SaxHandler();
            saxParser.parse(inputFile, saxHandler);

        } catch (ParserConfigurationException ex) {
            Logger.getLogger(IOModel.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SAXException ex) {
            Logger.getLogger(IOModel.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(IOModel.class.getName()).log(Level.SEVERE, null, ex);
        }
        return saxHandler.getListProduct();
    }

    public static void writeDOM(List<Product> data) {
        try {
            DocumentBuilderFactory documentFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder documentBuilder = documentFactory.newDocumentBuilder();
            Document document = (Document) documentBuilder.newDocument();
            // root element
            Element root = document.createElement("product_list");
            document.appendChild(root);

            for (Product product : data) {
                Element e = document.createElement("product");

                Attr attr = document.createAttribute("code");
                attr.setValue(product.getCode());
                e.setAttributeNode(attr);

                Element name = document.createElement("name");
                name.appendChild(document.createTextNode(product.getName()));
                e.appendChild(name);

                Element price = document.createElement("price");
                Attr attrPrice = document.createAttribute("unit");
                attrPrice.setValue("VND");
                price.setAttributeNode(attrPrice);
                price.appendChild(document.createTextNode(product.getPrice()));
                e.appendChild(price);

                Element description = document.createElement("description");
                description.appendChild(document.createTextNode(product.getDescription()));
                e.appendChild(description);

                Element images = document.createElement("images");
                List<String> listImage = product.getImages();
                for (String i : listImage) {
                    Element image = document.createElement("image");
                    image.appendChild(document.createTextNode(i));
                    images.appendChild(image);
                }
                e.appendChild(images);

                root.appendChild(e);

            }

            // create the xml file
            //transform the DOM Object to an XML File
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource domSource = new DOMSource(document);
            StreamResult streamResult = new StreamResult(new File("product.xml"));

            // If you use
            // StreamResult result = new StreamResult(System.out);
            // the output will be pushed to the standard output ...
            // You can use that for debugging
            transformer.transform(domSource, streamResult);

            System.out.println("Done creating XML File");

        } catch (TransformerException ex) {
            Logger.getLogger(IOModel.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(IOModel.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String[] args) {
        SaxRead();
    }
}
