import *  as fs from 'node:fs/promises';

import { PATH_DB_CONTACTS } from '../constans/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB_CONTACTS, 'utf-8');
    const contactList = JSON.parse(data);
    const newContactList = Array(number).fill(0).map(createFakeContact)
    // await fs.writeFile(PATH_DB_CONTACTS, JSON.stringify(newContactList));
    contactList.push(...newContactList);
    await fs.writeFile(PATH_DB_CONTACTS, JSON.stringify(contactList, null, 2));
    
}

generateContacts(5)