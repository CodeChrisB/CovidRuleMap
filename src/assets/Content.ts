import { SafeUrl } from "@angular/platform-browser";

export interface IContent{
  "id":number
  "link":string
  "date":string
  "country":string
}

export interface ISafeContent{
  "id":number
  "link":SafeUrl
  "date":string
  "country":string
}


