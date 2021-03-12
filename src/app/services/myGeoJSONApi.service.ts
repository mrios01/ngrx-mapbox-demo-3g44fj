import { Injectable } from "@angular/core";
import { Map, LngLatLike, LngLatBounds } from "mapbox-gl";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MyGeoJSONApiService {
  constructor(private httpClient: HttpClient) {}

  get(bbox: LngLatBounds) {
    return this.httpClient.get;
    "https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ"();
    //'https://opendata.arcgis.com/datasets/c57777877aa041ecaef98ff2519aabf6_44.geojson'
  }
}
