export class GeneralData {
  CompanyName: string;
  CompanyAddress: string;
  CompanyAddress2: string;
  CompanyPhone: string;
  CompanyEmail: string;
  MainLogo: string;
  CompanyFacebook: string;
  CompanyLinkedin: string;
  CompanyInstagram: string;
  CompanyTwitter: string;
  CompanyDescription: string;
  FooterLinks : Linklist;
  ScriptHead: any;
  ScriptBodyTop: any;
  ScriptBodyBottom: any;
}

export class Linklist {
  Name: string;
  Url: string;
  Target: string;
}
