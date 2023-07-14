import { Ctx, Query, Resolver, Arg } from 'type-graphql'
import Container from 'typedi'

import type { GraphqlContext } from '../../GraphqlContext'
import { GraphqlCarModel } from '../model/GraphqlCarModel'
import { GraphqlCarProvider } from '../provider/GraphqlCarProvider'

@Resolver(() => GraphqlCarModel)
export class GraphqlCarResolver {
  private carProvider = Container.get(GraphqlCarProvider)

  @Query(() => GraphqlCarModel, { nullable: true })
  async getCarById(
    @Ctx() ctx: GraphqlContext,
    @Arg('id', () => String, { nullable: false }) id: string
  ): Promise<GraphqlCarModel | null> {
    return this.carProvider.getCarById(ctx, id)
  }
  @Query(() => [GraphqlCarModel])
  async getCars(@Ctx() ctx: GraphqlContext): Promise<GraphqlCarModel[]> {
    return this.carProvider.getCars(ctx)
  }
}
