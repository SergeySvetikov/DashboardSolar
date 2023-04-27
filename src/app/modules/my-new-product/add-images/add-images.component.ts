import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Output,
} from "@angular/core";

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FileService } from '../../../core/services/file.service';
import { FileUpload, FileUploadModule } from "primeng/fileupload";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss'],
  imports: [CommonModule, ProgressSpinnerModule, FileUploadModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddImagesComponent {

  private _selectedImages = new Set<File>();
  @Output() uploadFile = new EventEmitter<string>();
  constructor(private filesService: FileService) {}

  imagesError: boolean = false;
  baseUrl: string = '/api/File';

  onUpload(event: any) {
    const file = ((event as HTMLInputElement).files as FileList)[0];
    this.filesService.uploadFile(file).subscribe(
      (fileId) => this.uploadFile.emit(`${this.baseUrl}` + fileId),
      (error) => {
        console.log(error);
      }
    );
  }
  removeImg($event: Event) {
    console.log($event);
  }
}
