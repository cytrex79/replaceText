module.exports = async (srv) => {
  srv.on("GetTemplate", async (oRequest) => {
    const sName = oRequest.data.name;
    const oTemplate = await _getTemplate('email1',['var1', 'var2']);
    console.log(oTemplate);
  });
  
  async function _getTemplate(sName,aParams){
    const { Templates } = cds.entities;
    const oTemplate = await SELECT.from(Templates, sName);
    for (let index = 0; index < aParams.length; index++) {
      oTemplate.subject = oTemplate.subject.replaceAll(`{${index}}`, aParams[index]);
      oTemplate.body = oTemplate.body.replaceAll(`{${index}}`, aParams[index]);
    }
    return oTemplate;
  }
};
