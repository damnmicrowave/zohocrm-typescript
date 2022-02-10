"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("../core/com/zoho/crm/api/sample/initializer/initialize");
const attachment_1 = require("../core/com/zoho/crm/api/sample/attachments/attachment");
const blue_print_1 = require("../core/com/zoho/crm/api/sample/blue_print/blue_print");
const bulk_read_1 = require("../core/com/zoho/crm/api/sample/bulk_read/bulk_read");
const bulk_write_1 = require("../core/com/zoho/crm/api/sample/bulk_write/bulk_write");
const contact_role_1 = require("../core/com/zoho/crm/api/sample/contact_roles/contact_role");
const currencies_1 = require("../core/com/zoho/crm/api/sample/currencies/currencies");
const custom_view_1 = require("../core/com/zoho/crm/api/sample/custom_views/custom_view");
const field_1 = require("../core/com/zoho/crm/api/sample/fields/field");
const file_1 = require("../core/com/zoho/crm/api/sample/files/file");
const layout_1 = require("../core/com/zoho/crm/api/sample/layouts/layout");
const module_1 = require("../core/com/zoho/crm/api/sample/modules/module");
const note_1 = require("../core/com/zoho/crm/api/sample/notes/note");
const notification_1 = require("../core/com/zoho/crm/api/sample/notifications/notification");
const organization_1 = require("../core/com/zoho/crm/api/sample/organization/organization");
const profile_1 = require("../core/com/zoho/crm/api/sample/profiles/profile");
const query_1 = require("../core/com/zoho/crm/api/sample/query/query");
const record_1 = require("../core/com/zoho/crm/api/sample/records/record");
const related_list_1 = require("../core/com/zoho/crm/api/sample/related_lists/related_list");
const related_record_1 = require("../core/com/zoho/crm/api/sample/related_records/related_record");
const role_1 = require("../core/com/zoho/crm/api/sample/roles/role");
const share_record_1 = require("../core/com/zoho/crm/api/sample/share_records/share_record");
const tag_1 = require("../core/com/zoho/crm/api/sample/tags/tag");
const tax_1 = require("../core/com/zoho/crm/api/sample/taxes/tax");
const territory_1 = require("../core/com/zoho/crm/api/sample/territories/territory");
const user_1 = require("../core/com/zoho/crm/api/sample/users/user");
const variable_group_1 = require("../core/com/zoho/crm/api/sample/variable_groups/variable_group");
const variable_1 = require("../core/com/zoho/crm/api/sample/variables/variable");
class Test {
    /**
     * name
     */
    static async call() {
        await initialize_1.SDKInitializer.initializeSDK();
        this.attachment();
        this.bluePrint();
        this.bulkRead();
        this.bulkWrite();
        this.contactRole();
        this.currency();
        this.customView();
        this.field();
        this.file();
        this.layout();
        this.module();
        this.note();
        this.notification();
        this.org();
        this.profile();
        this.query();
        this.record();
        this.relatedList();
        this.relatedRecord();
        this.role();
        this.shareRecord();
        this.tag();
        this.tax();
        this.territory();
        this.user();
        this.variableGroup();
        this.variable();
    }
    static async attachment() {
        let moduleAPIName = "Leads";
        let recordId = BigInt("34770616838056");
        let attachmentId = BigInt("347706110796001");
        let destinationFolder = "/Users/username/Documents/";
        let absoluteFilePath = "/Users/username/Documents//download.png";
        console.log("-----Calling getAttachments()-----");
        await attachment_1.Attachments.getAttachments(moduleAPIName, recordId);
        console.log("-----Calling uploadAttachments()-----");
        await attachment_1.Attachments.uploadAttachments(moduleAPIName, recordId, absoluteFilePath);
        console.log("-----Calling uploadLinkAttachment()-----");
        await attachment_1.Attachments.uploadLinkAttachment(moduleAPIName, recordId, "https://drones2.com");
        console.log("-----Calling deleteAttachments()-----");
        await attachment_1.Attachments.deleteAttachments(moduleAPIName, recordId, [BigInt("347706110903001"), BigInt("347706110904001")]);
        console.log("-----Calling deleteAttachment()-----");
        await attachment_1.Attachments.deleteAttachment(moduleAPIName, recordId, attachmentId);
        console.log("-----Calling downloadAttachment()-----");
        await attachment_1.Attachments.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder);
    }
    static async bluePrint() {
        let moduleAPIName = "Leads";
        let recordId = BigInt("34770614381002");
        let transitionId = BigInt("34770610173093");
        console.log("-----Calling getBlueprint()-----");
        await blue_print_1.BluePrint.getBlueprint(moduleAPIName, recordId);
        console.log("-----Calling updateBlueprint()-----");
        await blue_print_1.BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }
    static async bulkRead() {
        let moduleAPIName = "Leads";
        let jobId = BigInt("347706110901004");
        console.log("-----Calling createBulkReadJob()-----");
        await bulk_read_1.BulkRead.createBulkReadJob(moduleAPIName);
        console.log("-----Calling getBulkReadJobDetails()-----");
        await bulk_read_1.BulkRead.getBulkReadJobDetails(jobId);
        console.log("-----Calling downloadResult()-----");
        await bulk_read_1.BulkRead.downloadResult(BigInt("347706110901004"), "//Users/username/Documents/");
    }
    static async bulkWrite() {
        let filePath = "/Users/username/Documents/Leads.zip";
        let orgId = "673573045";
        let downloadUrl = "https://download-accl.zoho.com/v2/crm/673573045/bulk-write/347706110909001/347706110909001.zip";
        await bulk_write_1.BulkWrite.uploadFile(orgId, filePath);
        await bulk_write_1.BulkWrite.createBulkWriteJob("Leads", "347706110907001");
        await bulk_write_1.BulkWrite.getBulkWriteJobDetails(BigInt("347706110909001"));
        await bulk_write_1.BulkWrite.downloadBulkWriteResult(downloadUrl, "/Users/username/Documents/");
    }
    static async contactRole() {
        let contactRoleId = BigInt("347706110803005");
        let contactRoleIds = ["347706110910004", "347706110910008", "347706110910010"];
        console.log("-----Calling getContactRoles()-----");
        await contact_role_1.ContactRoles.getContactRoles();
        await contact_role_1.ContactRoles.getContactRole(contactRoleId);
        console.log("-----Calling createContactRoles()-----");
        await contact_role_1.ContactRoles.createContactRoles();
        console.log("-----Calling updateContactRoles()-----");
        await contact_role_1.ContactRoles.updateContactRoles();
        console.log("-----Calling updateContactRole()-----");
        await contact_role_1.ContactRoles.updateContactRole(contactRoleId);
        console.log("-----Calling deleteContactRole()-----");
        await contact_role_1.ContactRoles.deleteContactRole(contactRoleId);
        console.log("-----Calling deleteContactRoles()-----");
        await contact_role_1.ContactRoles.deleteContactRoles(contactRoleIds);
        await contact_role_1.ContactRoles.getAllContactRolesOfDeal(BigInt("34770610207269"));
        await contact_role_1.ContactRoles.getContactRoleOfDeal(BigInt("34770610208066"), BigInt("34770610207269"));
        await contact_role_1.ContactRoles.addContactRoleToDeal(BigInt("34770610208066"), BigInt("34770610207269"));
        await contact_role_1.ContactRoles.removeContactRoleFromDeal(BigInt("34770610208066"), BigInt("34770610207269"));
    }
    static async currency() {
        let currencyId = BigInt("34770617368016");
        console.log("-----Calling enableMultipleCurrencies()-----");
        await currencies_1.Currencies.enableMultipleCurrencies();
        console.log("-----Calling getCurrencies()-----");
        await currencies_1.Currencies.getCurrencies();
        console.log("-----Calling getCurrency()-----");
        await currencies_1.Currencies.getCurrency(currencyId);
        console.log("-----Calling addCurrencies()-----");
        await currencies_1.Currencies.addCurrencies();
        console.log("-----Calling updateCurrencies()-----");
        await currencies_1.Currencies.updateCurrencies();
        console.log("-----Calling updateCurrency()-----");
        await currencies_1.Currencies.updateCurrency(currencyId);
        console.log("-----Calling updateBaseCurrency()-----");
        await currencies_1.Currencies.updateBaseCurrency();
    }
    static async customView() {
        let moduleAPIName = "leads";
        let customViewId = BigInt("34096430087563");
        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
        // "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
        //  "Purchase_Orders", "Accounts", "Cases", "Notes"];
        // names.forEach(async name => {
        // 	await CustomViews.getCustomViews(name);
        // });
        console.log("-----Calling getCustomViews()-----");
        await custom_view_1.CustomViews.getCustomViews(moduleAPIName);
        console.log("-----Calling getCustomView()-----");
        await custom_view_1.CustomViews.getCustomView(moduleAPIName, customViewId);
    }
    static async field() {
        let moduleAPIName = "leads";
        let fieldId = BigInt("34096430053001");
        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes"];
        // names.forEach(async name => {
        // 	await Fields.getFields(name);
        // });
        console.log("-----Calling getFields()-----");
        await field_1.Fields.getFields(moduleAPIName);
        console.log("-----Calling getField()-----");
        await field_1.Fields.getField(moduleAPIName, fieldId);
    }
    static async file() {
        let destinationFolder = "/Users/username/Documents/";
        let fileId = "ae9c7cefa418aec1d6a5cc2d9ab35c32cb491d9bf242c573bf1c95c9c6588608";
        let absoluteFilePath = "/Users/username/Documents//download.png";
        console.log("-----Calling uploadFile()-----");
        await file_1.Files.uploadFiles(absoluteFilePath);
        console.log("-----Calling getFile()-----");
        await file_1.Files.getFile(fileId, destinationFolder);
    }
    static async layout() {
        let moduleAPIName = "products";
        let layoutId = BigInt("34096430091009");
        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes"];
        // names.forEach(async name => {
        // 	await Layouts.getLayouts(name);
        // });
        console.log("-----Calling getLayouts()-----");
        await layout_1.Layouts.getLayouts(moduleAPIName);
        console.log("-----Calling getLayout()-----");
        await layout_1.Layouts.getLayout(moduleAPIName, layoutId);
    }
    static async module() {
        let moduleAPIName = "apiName1";
        let moduleId = BigInt("34096430252001");
        console.log("-----Calling getModules()-----");
        await module_1.Modules.getModules();
        console.log("-----Calling getModule()-----");
        await module_1.Modules.getModule(moduleAPIName);
        console.log("-----Calling updateModuleByAPIName()-----");
        await module_1.Modules.updateModuleByAPIName(moduleAPIName);
        console.log("-----Calling updateModuleById()-----");
        await module_1.Modules.updateModuleById(moduleId);
    }
    static async note() {
        let noteId = BigInt("347706110791016");
        let noteIds = [BigInt("347706110928001"), BigInt("347706110928002"), BigInt("347706110928003"), BigInt("347706110928004"), BigInt("347706110928005")];
        console.log("-----Calling getNotes()-----");
        await note_1.Notes.getNotes();
        console.log("-----Calling getNote()-----");
        await note_1.Notes.getNote(noteId);
        console.log("-----Calling createNotes()-----");
        await note_1.Notes.createNotes();
        console.log("-----Calling updateNotes()-----");
        await note_1.Notes.updateNotes();
        console.log("-----Calling updateNote()-----");
        await note_1.Notes.updateNote(noteId);
        console.log("-----Calling deleteNotes()-----");
        await note_1.Notes.deleteNotes(noteIds);
        console.log("-----Calling deleteNote()-----");
        await note_1.Notes.deleteNote(noteId);
    }
    static async notification() {
        let channelIds = [BigInt("1006800211"), BigInt("1006800211")];
        console.log("-----Calling enableNotifications()-----");
        await notification_1.Notifications.enableNotifications();
        console.log("-----Calling getNotificationDetails()-----");
        await notification_1.Notifications.getNotificationDetails();
        console.log("-----Calling updateNotifications()-----");
        await notification_1.Notifications.updateNotifications();
        console.log("-----Calling updateNotification()-----");
        await notification_1.Notifications.updateNotification();
        console.log("-----Calling disableNotifications()-----");
        await notification_1.Notifications.disableNotifications(channelIds);
        console.log("-----Calling getNotificationDetails()-----");
        await notification_1.Notifications.disableNotification();
    }
    static async org() {
        let filePath = "/Users/username/Documents//download.png";
        console.log("-----Calling getOrganization()-----");
        await organization_1.Organization.getOrganization();
        console.log("-----Calling uploadOrganizationPhoto()-----");
        await organization_1.Organization.uploadOrganizationPhoto(filePath);
    }
    static async profile() {
        let profileId = BigInt("34770610026014");
        console.log("-----Calling getProfiles()-----");
        await profile_1.Profiles.getProfiles();
        console.log("-----Calling getProfile()-----");
        await profile_1.Profiles.getProfile(profileId);
    }
    static async query() {
        await query_1.Query.getRecords();
    }
    static async record() {
        let moduleAPIName = "leads";
        let recordId = BigInt("347706110767003");
        let externalFieldValue = "TestExternal221";
        let destinationFolder = "/Users/username/Documents/";
        let filePath = "/Users/username/Documents//download.png";
        let recordIds = ["213456782", "347706110780113", "34096430729009"];
        let jobId = "34770616916059";
        let names = ["products", "tasks", "vendors", "calls", "leads", "deals", "campaigns", "quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes"];
        // names.forEach(async name => {
        //     await Records.getRecords(name);
        // });
        console.log("-----Calling getRecord()-----");
        await record_1.Records.getRecord(moduleAPIName, recordId, destinationFolder);
        await record_1.Records.updateRecord(moduleAPIName, recordId);
        await record_1.Records.deleteRecord(moduleAPIName, recordId);
        await record_1.Records.getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder);
        await record_1.Records.updateRecordUsingExternalId(moduleAPIName, externalFieldValue);
        await record_1.Records.deleteRecordUsingExternalId(moduleAPIName, externalFieldValue);
        console.log("-----Calling getRecords()-----");
        await record_1.Records.getRecords(moduleAPIName);
        console.log("-----Calling createRecords()-----");
        await record_1.Records.createRecords(moduleAPIName);
        await record_1.Records.updateRecords(moduleAPIName);
        await record_1.Records.deleteRecords(moduleAPIName, recordIds);
        await record_1.Records.upsertRecords(moduleAPIName);
        await record_1.Records.getDeletedRecords(moduleAPIName);
        await record_1.Records.searchRecords(moduleAPIName);
        await record_1.Records.convertLead(BigInt("347706110780065"));
        console.log("-----Calling uploadPhoto()-----");
        await record_1.Records.uploadPhoto(moduleAPIName, recordId, filePath);
        console.log("-----Calling getPhoto()-----");
        await record_1.Records.getPhoto(moduleAPIName, recordId, destinationFolder);
        await record_1.Records.deletePhoto(moduleAPIName, recordId);
        await record_1.Records.massUpdateRecords(moduleAPIName);
        await record_1.Records.getMassUpdateStatus(moduleAPIName, jobId);
    }
    static async relatedList() {
        let moduleAPIName = "quotes";
        let relatedListId = BigInt("34096430003885");
        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes"];
        // names.forEach(async name => {
        // 	await RelatedLists.getRelatedLists(name);
        // });
        console.log("-----Calling getRelatedLists()-----");
        await related_list_1.RelatedLists.getRelatedLists(moduleAPIName);
        console.log("-----Calling getRelatedList()-----");
        await related_list_1.RelatedLists.getRelatedList(moduleAPIName, relatedListId);
    }
    static async relatedRecord() {
        let moduleAPIName = "leads";
        let recordId = BigInt("347706110725009");
        let relatedModuleAPIName = "products";
        let relatedId = BigInt("347706110352003");
        let relatedIds = ["347706110937001", "34770610307010"];
        let destinationFolder = "/Users/username/Documents/";
        let externalValue = "LeadsExternal";
        let externalFieldValue = "TestExternalProduct";
        console.log("-----Calling getRelatedRecords()-----");
        await related_record_1.RelatedRecord.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);
        console.log("-----Calling updateRelatedRecords()-----");
        await related_record_1.RelatedRecord.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);
        console.log("-----Calling deLinkRecords()-----");
        await related_record_1.RelatedRecord.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);
        await related_record_1.RelatedRecord.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
        await related_record_1.RelatedRecord.updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
        await related_record_1.RelatedRecord.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, relatedIds);
        console.log("-----Calling getRelatedRecord()-----");
        await related_record_1.RelatedRecord.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId, destinationFolder);
        console.log("-----Calling updateRelatedRecord()-----");
        await related_record_1.RelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);
        console.log("-----Calling deLinkRecord()-----");
        await related_record_1.RelatedRecord.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);
        await related_record_1.RelatedRecord.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue, destinationFolder);
        await related_record_1.RelatedRecord.updateRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
        await related_record_1.RelatedRecord.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
    }
    static async role() {
        let roleId = BigInt("34770610026005");
        console.log("-----Calling getRoles()-----");
        await role_1.Roles.getRoles();
        console.log("-----Calling getRole()-----");
        await role_1.Roles.getRole(roleId);
    }
    static async shareRecord() {
        let moduleAPIName = "Leads";
        let recordId = BigInt("34770615623115");
        console.log("-----Calling shareRecord()-----");
        await share_record_1.ShareRecords.shareRecord(moduleAPIName, recordId);
        console.log("-----Calling updateSharePermissions()-----");
        await share_record_1.ShareRecords.updateSharePermissions(moduleAPIName, recordId);
        console.log("-----Calling getSharedRecordDetails()-----");
        await share_record_1.ShareRecords.getSharedRecordDetails(moduleAPIName, recordId);
        console.log("-----Calling revokeSharedRecord()-----");
        await share_record_1.ShareRecords.revokeSharedRecord(moduleAPIName, recordId);
    }
    static async tag() {
        let moduleAPIName = "Leads";
        let tagId = BigInt("34770618793001");
        let recordId = BigInt("347706110783139");
        let tagNames = ["edited-tagname,addtag12"];
        let recordIds = [BigInt("347706110783139"), BigInt("34096432730218"), BigInt("34096432469044")];
        let conflictId = "34770618793001";
        console.log("-----Calling getTags()-----");
        await tag_1.Tags.getTags(moduleAPIName);
        console.log("-----Calling createTags()-----");
        await tag_1.Tags.createTags(moduleAPIName);
        console.log("-----Calling updateTags()-----");
        await tag_1.Tags.updateTags(moduleAPIName);
        console.log("-----Calling updateTag()-----");
        await tag_1.Tags.updateTag(moduleAPIName, tagId);
        console.log("-----Calling mergeTags()-----");
        await tag_1.Tags.mergeTags(tagId, conflictId);
        console.log("-----Calling addTagsToRecord()-----");
        await tag_1.Tags.addTagsToRecord(moduleAPIName, recordId, tagNames);
        console.log("-----Calling removeTagsFromRecord()-----");
        await tag_1.Tags.removeTagsFromRecord(moduleAPIName, recordId, tagNames);
        console.log("-----Calling addTagsToMultipleRecords()-----");
        await tag_1.Tags.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);
        console.log("-----Calling removeTagsFromMultipleRecords()-----");
        await tag_1.Tags.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);
        console.log("-----Calling getRecordCountForTag()-----");
        await tag_1.Tags.getRecordCountForTag(moduleAPIName, tagId);
        console.log("-----Calling deleteTag()-----");
        await tag_1.Tags.deleteTag(tagId);
    }
    static async tax() {
        let taxId = BigInt("347706110962009");
        console.log("-----Calling getTaxes()-----");
        await tax_1.Taxes.getTaxes();
        console.log("-----Calling getTax()-----");
        await tax_1.Taxes.getTax(taxId);
        console.log("-----Calling createTaxes()-----");
        await tax_1.Taxes.createTaxes();
        console.log("-----Calling updateTaxes()-----");
        await tax_1.Taxes.updateTaxes();
        console.log("-----Calling deleteTaxes()-----");
        await tax_1.Taxes.deleteTaxes([BigInt("347706110962010"), BigInt("347706110962009")]);
        console.log("-----Calling deleteTax()-----");
        await tax_1.Taxes.deleteTax(taxId);
    }
    static async territory() {
        let territoryId = BigInt("34770613051357");
        console.log("-----Calling getTerritories()-----");
        await territory_1.Territories.getTerritories();
        console.log("-----Calling getTerritory()-----");
        await territory_1.Territories.getTerritory(territoryId);
    }
    static async user() {
        let userId = BigInt("347706110962018");
        console.log("-----Calling getUsers()-----");
        await user_1.Users.getUsers();
        console.log("-----Calling getUser()-----");
        await user_1.Users.getuser(userId);
        console.log("-----Calling updateUsers()-----");
        await user_1.Users.updateUsers();
        console.log("-----Calling updateUser()-----");
        await user_1.Users.updateUser(userId);
        console.log("-----Calling deleteUser()-----");
        await user_1.Users.deleteUser(userId);
        console.log("-----Calling createUser()-----");
        await user_1.Users.createUser();
    }
    static async variableGroup() {
        let variableGroupId = BigInt("34770613089001");
        let variableGroupAPIName = "General";
        console.log("-----Calling getVariableGroups()-----");
        await variable_group_1.VariableGroups.getVariableGroups();
        console.log("-----Calling getVariableGroupById()-----");
        await variable_group_1.VariableGroups.getVariableGroupById(variableGroupId);
        console.log("-----Calling getVariableGroupByAPIName()-----");
        await variable_group_1.VariableGroups.getVariableGroupByAPIName(variableGroupAPIName);
    }
    static async variable() {
        let variableIds = [BigInt("347706110670033"), BigInt("347706110964012")];
        console.log("-----Calling createVariables()-----");
        await variable_1.Variables.createVariables();
        console.log("-----Calling getVariables()-----");
        await variable_1.Variables.getVariables();
        console.log("-----Calling getVariableById()-----");
        await variable_1.Variables.getVariableById(BigInt("347706110178013"));
        console.log("-----Calling getVariableForAPIName()-----");
        await variable_1.Variables.getVariableForAPIName("Variable551ash");
        console.log("-----Calling updateVariableByAPIName()-----");
        await variable_1.Variables.updateVariableByAPIName("Variable551ash");
        console.log("-----Calling updateVariableById()-----");
        await variable_1.Variables.updateVariableById(BigInt("347706110321012"));
        console.log("-----Calling updateVariables()-----");
        await variable_1.Variables.updateVariables();
        console.log("-----Calling deleteVariables()-----");
        await variable_1.Variables.deleteVariables(variableIds);
        console.log("-----Calling deleteVariable()-----");
        await variable_1.Variables.deleteVariable(BigInt("347706110321014"));
    }
}
Test.call();
//# sourceMappingURL=main.js.map