import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() {
  }
  private async savePicture(photo: Photo){}
  public async addNewToGallery(){
    const capturaPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: "soon..",
      webviewPath: capturedPhoto.webPath
    })
  }
}
export interface UserPhoto{
  filepath: string;
  webviewPath?: string;
}
//https://ionicframework.com/docs/angular/your-first-app/saving-photos
