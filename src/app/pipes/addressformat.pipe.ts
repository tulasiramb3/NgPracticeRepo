import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressformat'
})
export class AddressformatPipe implements PipeTransform {
  addressFormatted = '';
  transform(address: any): string {
    //  Object.keys(address).forEach((key)=>{
    //   this.addressFormatted = this.addressFormatted + address[key];
    //  });
    this.addressFormatted = address['suite'] + ", " + address['street'] + ", " + address['city'] + ", " + address['zipcode'];
    return this.addressFormatted;
  }

}
