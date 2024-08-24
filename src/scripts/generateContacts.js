// import *  as fs from 'node:fs/promises';
import updateContacts from './updateContacts.js';
// import { PATH_DB} from '../constans/contacts.js';

import getAllContacts from './getAllContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    // const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactList = await getAllContacts();
    const newContactList = Array(number).fill(0).map(createFakeContact)
    // await fs.writeFile(PATH_DB_CONTACTS, JSON.stringify(newContactList));
    contactList.push(...newContactList);
    // await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
    await updateContacts(contactList);
};

generateContacts(5)