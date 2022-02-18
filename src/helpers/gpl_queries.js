import {gql} from "@apollo/client";

export const UPLOAD_FILE = gql`
mutation UploadFile($file: Upload!) {
  uploadFile(file: $file) {
    success
    invoice {
      id
      number
      date
      supplier {
        name
        rut
        address
      }
      crudeItem {
        id
        name
        cost
        discount
        units
        quantity
        relatedItem {
          id
          product {
            name
          }
          cost
          discount
          units
          quantity
        }
      }
    }
  }
}
`;