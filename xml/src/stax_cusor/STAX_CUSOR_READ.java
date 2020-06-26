/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package stax_cusor;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

/**
 *
 * @author PC
 */
public class STAX_CUSOR_READ {

    static void print(String name, XMLStreamReader reader) throws XMLStreamException {
        System.out.println(name + " : " + reader.getElementText());
    }

    public static void main(String[] args) {
        try {
            //StAX Cursor
            XMLInputFactory factory = XMLInputFactory.newFactory();
            XMLStreamReader reader = factory.createXMLStreamReader(
                    new FileInputStream(new File("message.xml")));

            while (reader.hasNext()) {
                int type = reader.next();
                if (type == XMLStreamReader.START_ELEMENT) {
                    String name = reader.getName().toString();
                    if (name.equals("from") || name.equals("to") || name.equals("content")) {
                        print(name, reader);
                    }
//                    if("person".equals(name)){
//                        System.out.println(reader.getAttributeValue("", "id"));
//                    }
                }
            }

        } catch (XMLStreamException ex) {
            Logger.getLogger(STAX_CUSOR_READ.class.getName()).log(Level.SEVERE, null, ex);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(STAX_CUSOR_READ.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
