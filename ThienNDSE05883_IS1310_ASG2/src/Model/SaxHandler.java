/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import Product.Product;
import java.util.ArrayList;
import java.util.List;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/**
 *
 * @author ThienNDSE05883
 */
public class SaxHandler extends DefaultHandler {

    boolean name = false;
    boolean price = false;
    boolean description = false;
    boolean image = false;
    private List<Product> listProduct = new ArrayList<Product>();
    Product p = null;

    public List<Product> getListProduct() {
        return listProduct;
    }

    @Override
    public void startElement(String uri,
            String localName, String qName, Attributes attributes) throws SAXException {
        if (qName.equalsIgnoreCase("product")) {
            p = new Product();
            p.setCode(attributes.getValue("code"));
        } else if (qName.equalsIgnoreCase("name")) {
            name = true;
        } else if (qName.equalsIgnoreCase("price")) {
            price = true;
        } else if (qName.equalsIgnoreCase("description")) {
            description = true;
        } else if (qName.equalsIgnoreCase("image")) {
            image = true;
        }
    }

    @Override
    public void endElement(String uri,
            String localName, String qName) throws SAXException {
        if (qName.equalsIgnoreCase("product")) {
//            System.out.println("End Element :" + qName);
            listProduct.add(p);
        }
    }

    @Override
    public void characters(char ch[], int start, int length) throws SAXException {

        if (name) {
//            System.out.println("name: "
//                    + new String(ch, start, length));
            p.setName(new String(ch, start, length));
            name = false;
        } else if (price) {
//            System.out.println("price: " + new String(ch, start, length));
            p.setPrice(new String(ch, start, length));
            price = false;
        } else if (description) {
//            System.out.println("description: " + new String(ch, start, length));
            p.setDescription(new String(ch, start, length));
            description = false;
        } else if (image) {
//            System.out.println("images: " + new String(ch, start, length));
            p.setImages(new String(ch, start, length));
            image = false;
        }
    }
}
