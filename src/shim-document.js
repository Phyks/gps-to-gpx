import { DOMImplementation, XMLSerializer as XMLSerializerShim } from 'xmldom';

export const document = {};
document.implementation = new DOMImplementation();

export const XMLSerializer = XMLSerializerShim;
