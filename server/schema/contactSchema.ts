import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Contact {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  doorNo: string;

  @Field()
  address: string;

  @Field()
  postCode: string;
  
  @Field()
  city: string;

  @Field()
  phone: string;
  
  @Field()
  email: string;
}