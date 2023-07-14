import { Field, ObjectType } from 'type-graphql'

@ObjectType('Media', {
  simpleResolvers: true,
})
export class GraphqlMediaModel {
  @Field(() => String)
  url: string

  constructor(url: string) {
    this.url = url
  }
}
