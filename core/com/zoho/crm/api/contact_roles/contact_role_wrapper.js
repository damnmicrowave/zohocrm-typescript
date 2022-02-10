"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoleWrapper = exports.MasterModel = void 0;
class ContactRoleWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the contactRole
     * @returns A string representing the contactRole
     */
    getContactRole() {
        return this.contactRole;
    }
    /**
     * The method to set the value to contactRole
     * @param contactRole A string representing the contactRole
     */
    setContactRole(contactRole) {
        this.contactRole = contactRole;
        this.keyModified.set("Contact_Role", 1);
    }
    /**
     * The method to check if the user has modified the given key
     * @param key A string representing the key
     * @returns A number representing the modification
     */
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    /**
     * The method to mark the given key as modified
     * @param key A string representing the key
     * @param modification A number representing the modification
     */
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = ContactRoleWrapper;
exports.ContactRoleWrapper = ContactRoleWrapper;
//# sourceMappingURL=contact_role_wrapper.js.map