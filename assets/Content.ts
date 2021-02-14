import { SafeUrl } from "@angular/platform-browser";

export interface IContent{
  "link":string
  "date":string
  "country":string
}

export interface ISafeContent{
  "link":SafeUrl
  "date":string
  "country":string
}


