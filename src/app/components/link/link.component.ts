import { UrlService } from './../../services/url.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  constructor(public service: UrlService, private fb: FormBuilder) { }

  ngOnInit(): void { }

  formLink = this.fb.group({
    site: ['', [Validators.required]]
  })

  onClickShort(link: any) {
    this.service.api = link;
    console.log(this.service.api);
  }

}
