import { Ctx, Query, Resolver, Arg, Int } from 'type-graphql'
import Container from 'typedi'

import type { GraphqlContext } from '../../GraphqlContext'
import { GraphqlCarModel } from '../model/GraphqlCarModel'
import { GraphqlCarProvider } from '../provider/GraphqlCarProvider'
import { GraphqlCarsModel } from '../model/GraphqlCarsModel'

@Resolver(() => GraphqlCarModel)
export class GraphqlCarResolver {
  private carProvider = Container.get(GraphqlCarProvider)

  @Query(() => GraphqlCarModel, { nullable: true })
  async car(
    @Ctx() ctx: GraphqlContext,
    @Arg('id', () => String, { nullable: false }) id: string
  ): Promise<GraphqlCarModel | null> {
    return this.carProvider.getCarById(ctx, id)
  }
  @Query(() => GraphqlCarsModel)
  async cars(
    @Ctx() ctx: GraphqlContext,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number
  ): Promise<GraphqlCarsModel> {
    return this.carProvider.getCars(ctx, { limit, offset })
  }
}
