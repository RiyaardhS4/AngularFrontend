import { Injectable } from "@angular/core";
import notify from 'devextreme/ui/notify';
import { DatePipe } from "@angular/common";


@Injectable()
export class Globals {

  public toastTimeDuration: number = 1000;
  public toastSuccessType: string = "success";
  public toastErrorType: string = "error";
  public companyName: string = "S4";
  public imageProfileURLDir: string = 'https://portal.s4.co.za/gallery/images/staff/';
  public formNavString: string = '/form';
  public hereMapAppID = 'FWQJ1YZPbezEhJJWrywq';
  public hereMapAppCode = '0Sow3XVx8L5B5iMdGiYUXA';
  public emailServerDirectory = 'http://localhost:8181/emailapi/'
  constructor(private datePipe: DatePipe) {

  }


  public ToastSuccessMessage(paMessage: string) {

    notify(paMessage, this.toastSuccessType, this.toastTimeDuration);
  }

  public ToastErrorMessage(paMessage: string) {

    notify(paMessage, this.toastErrorType, this.toastTimeDuration);
  }


  public StringDateYYYYMMDD(paDate: Date) {
    return this.datePipe.transform(paDate, "yyyy-MM-dd", "UCT");

  }


  //#region Image File methods

  public ValidateImageFileFormat(paFileName: string): boolean {
    var loExtension = paFileName.substring(paFileName.lastIndexOf('.') + 1);
    if (loExtension.toLowerCase() == 'png' || loExtension.toLowerCase() == 'jpg' || loExtension.toLowerCase() == 'jpeg') {
      return true;
    }
    else {
      return false;
    }
  }

  public ValidateImageFilePattern(paImageFile: File): boolean {
    var loFile = paImageFile;
    var pattern = /image-*/;
    if (!loFile.type.match(pattern)) {
      return false;
    }
    else {
      return true;
    }
  }


  public ConvertDataURLtoFile(paDataURL, paFilename) {
    var loArr = paDataURL.split(','), mime = loArr[0].match(/:(.*?);/)[1],
      bstr = atob(loArr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], paFilename, { type: mime });
  }



  //#endregion


  //#region Validations

  ValidateEmail(paEmail) {
    var loRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return loRegex.test(paEmail);
  }

  //#endregion


}
