/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package is1308staxdemo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.stream.XMLOutputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamWriter;

/**
 *
 * @author PC
 */
public class StaxWrite {

    public static void main(String[] args) {
        try {
            XMLOutputFactory factory = XMLOutputFactory.newFactory();
            XMLStreamWriter writer = factory.createXMLStreamWriter(new FileOutputStream(new File("message.xml")));
            writer.writeStartDocument("utf-8", "1.0");
            writer.writeStartElement("message");
            writer.writeStartElement("from");
            writer.writeCharacters("kienlt6@fe.edu.vn");
            writer.writeEndElement();
            writer.writeStartElement("to");
            writer.writeCharacters("is1308@fe.edu.vn");
            writer.writeEndElement();
            writer.writeStartElement("content");
            writer.writeCharacters("Thứ 5 tuần sau khiểm tra nhé!");
            writer.writeEndElement();
            writer.writeEndElement();
            writer.writeEndDocument();
            writer.close();
            System.out.println("write done");
        } catch (FileNotFoundException ex) {
            Logger.getLogger(StaxWrite.class.getName()).log(Level.SEVERE, null, ex);
        } catch (XMLStreamException ex) {
            Logger.getLogger(StaxWrite.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
