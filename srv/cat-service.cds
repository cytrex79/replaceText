using examples.email as email from '../db/data-model';

service CatalogService {
    entity Templates as projection on email.Templates;

    function GetTemplate(name: String) returns {
        subject: String;
        body: String;
    }
}