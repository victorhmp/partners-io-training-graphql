interface LiveProductViewsArgs {
  productSlug: string
}

export const liveProductViews = async (
  _: any,
  args: LiveProductViewsArgs,
  ctx: Context
) => {
  const response = await ctx.clients.analytics.liveProductViews(
    args.productSlug.toString()
  )

  return {
    slug: response[0].slug,
    liveViews: response[0].liveUsers,
  }
}
