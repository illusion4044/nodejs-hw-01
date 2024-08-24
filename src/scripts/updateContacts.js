import *  as fs from 'node:fs/promises';

import { PATH_DB} from '../constans/contacts.js';

const updateContacts = contacts => fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

export default updateContacts